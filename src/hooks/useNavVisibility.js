import { useEffect, useRef, useState } from 'react';

/**
 * Apple-style floating pill behaviour:
 *  - always visible while parked at the top of the document
 *  - tucks away the moment the page starts moving
 *  - drops back in as soon as scrolling settles (no direction guessing)
 *
 * Also reports whether the pill is currently sitting over a dark band, so the
 * glass can flip tint instead of punching a pale bar through a dark section.
 */
export default function useNavVisibility({ settleMs = 140, topZone = 36 } = {}) {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);

  const timer = useRef(null);
  const frame = useRef(0);
  const last = useRef(0);
  const darkEls = useRef([]);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    darkEls.current = Array.from(document.querySelectorAll('[data-theme="dark"]'));

    const settle = () => {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setVisible(true), settleMs);
    };

    const measureTint = () => {
      // the band the pill physically occupies
      const top = 10;
      const bottom = 76;
      const hit = darkEls.current.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < bottom && r.bottom > top;
      });
      setOverDark(hit);
    };

    const read = () => {
      frame.current = 0;
      const y = window.scrollY;
      const delta = Math.abs(y - last.current);
      last.current = y;

      setScrolled(y > 18);
      measureTint();

      if (y <= topZone) {
        clearTimeout(timer.current);
        setVisible(true);
        return;
      }
      if (delta > 4 && !reduced) setVisible(false);
      settle();
    };

    const onScroll = () => {
      if (frame.current) return;
      frame.current = requestAnimationFrame(read);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    read();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(timer.current);
      cancelAnimationFrame(frame.current);
    };
  }, [settleMs, topZone]);

  return { visible, scrolled, overDark, setVisible };
}

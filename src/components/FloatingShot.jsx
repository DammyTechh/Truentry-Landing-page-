import { useEffect, useRef } from 'react';
import './FloatingShot.css';

/**
 * Renders a cut-out product still as a body suspended in 3D space.
 *  · continuous idle drift (CSS, so it never costs a frame of JS)
 *  · pointer-driven tilt on the X/Y axes, critically damped
 *  · scroll parallax on depth + lift
 *  · specular sheen masked to the device silhouette
 *  · ground shadow that softens as the body rises
 */
export default function FloatingShot({
  src,
  alt,
  className = '',
  depth = 1,
  tiltMax = 13,
  shadow = true,
  sheen = true,
  priority = false,
  children,
}) {
  const scene = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    const sceneEl = scene.current;
    const bodyEl = body.current;
    if (!sceneEl || !bodyEl) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fine = window.matchMedia('(pointer: fine)').matches;

    const target = { rx: 0, ry: 0, px: 0, py: 0, sy: 0 };
    const current = { rx: 0, ry: 0, px: 0, py: 0, sy: 0 };
    let raf = 0;
    let running = false;

    const onPointer = (e) => {
      const r = sceneEl.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
      const ny = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
      target.ry = clamp(nx, -1, 1) * tiltMax;
      target.rx = clamp(-ny, -1, 1) * (tiltMax * 0.68);
      target.px = clamp(nx, -1, 1) * 16 * depth;
      target.py = clamp(ny, -1, 1) * 10 * depth;
      start();
    };

    const onLeave = () => {
      target.rx = target.ry = target.px = target.py = 0;
      start();
    };

    const onScroll = () => {
      const r = sceneEl.getBoundingClientRect();
      const progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      target.sy = clamp(progress, -1.4, 1.4) * -46 * depth;
      start();
    };

    function tick() {
      let moving = false;
      for (const k of ['rx', 'ry', 'px', 'py', 'sy']) {
        const d = target[k] - current[k];
        if (Math.abs(d) > 0.012) {
          current[k] += d * 0.085;
          moving = true;
        } else {
          current[k] = target[k];
        }
      }

      const lift = -current.rx / (tiltMax * 0.68);
      bodyEl.style.setProperty('--rx', `${current.rx.toFixed(3)}deg`);
      bodyEl.style.setProperty('--ry', `${current.ry.toFixed(3)}deg`);
      bodyEl.style.setProperty('--px', `${(current.px + 0).toFixed(2)}px`);
      bodyEl.style.setProperty('--py', `${(current.py + current.sy).toFixed(2)}px`);
      bodyEl.style.setProperty('--sheen', `${(50 + current.ry * 2.6).toFixed(1)}%`);
      bodyEl.style.setProperty('--shadow-scale', (1 - Math.abs(lift) * 0.08).toFixed(3));

      if (moving) raf = requestAnimationFrame(tick);
      else running = false;
    }

    function start() {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    }

    if (fine) {
      window.addEventListener('pointermove', onPointer, { passive: true });
      window.addEventListener('pointerleave', onLeave, { passive: true });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [depth, tiltMax]);

  return (
    <div className={`sh ${className}`} ref={scene}>
      <div className="sh__halo" aria-hidden="true" />
      <div className="sh__body" ref={body}>
        <div className="sh__drift">
          <img
            className="sh__img"
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            draggable="false"
          />
          {sheen && (
            <span
              className="sh__sheen"
              aria-hidden="true"
              style={{ '--mask': `url(${src})` }}
            />
          )}
          {children}
        </div>
      </div>
      {shadow && <div className="sh__ground" aria-hidden="true" />}
    </div>
  );
}

function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

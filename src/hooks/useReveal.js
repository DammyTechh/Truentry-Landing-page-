import { useEffect } from 'react';

/* Adds .is-in to every [data-reveal] once it enters the viewport. */
export default function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]:not(.is-in)');
    if (!nodes.length) return;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

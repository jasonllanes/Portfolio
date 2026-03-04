import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the class 'animate-in' is added,
 * triggering the CSS reveal animations defined in index.css.
 */
export const useScrollAnimation = (threshold = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold }
    );

    // Observe the element itself and all children with the reveal class
    const targets = el.querySelectorAll<HTMLElement>(
      '.reveal, .reveal-left, .reveal-right'
    );
    targets.forEach((t) => observer.observe(t));

    // Also observe the container itself if it has a reveal class
    if (
      el.classList.contains('reveal') ||
      el.classList.contains('reveal-left') ||
      el.classList.contains('reveal-right')
    ) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
};

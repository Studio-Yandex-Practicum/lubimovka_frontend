import { useRef, useState, useCallback } from 'react';

export const useInViewport = <T extends HTMLElement>(): [React.RefCallback<T>, boolean] => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [inViewport, setInViewport] = useState(false);

  const setRef: React.RefCallback<T | null> = useCallback((node) => {
    if (typeof IntersectionObserver !== 'undefined') {
      if (node && !observer.current) {
        observer.current = new IntersectionObserver((entries) => {
          const lastEntry = entries[entries.length - 1];

          setInViewport(lastEntry.isIntersecting);
        });
      } else {
        observer.current?.disconnect();
      }

      if (node) {
        observer.current?.observe(node);
      } else {
        setInViewport(false);
      }
    }
  }, []);

  return [setRef, inViewport];
};

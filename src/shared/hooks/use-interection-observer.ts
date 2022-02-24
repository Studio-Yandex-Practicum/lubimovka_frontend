import { useEffect, useRef, RefObject, useState } from 'react';

export const useIntersectionObserver = (elementRef: RefObject<Element>) => {
  const observerRef = useRef<IntersectionObserver>();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      setIsIntersecting(entries.some(({ isIntersecting }) => isIntersecting));
    });
  }, []);

  useEffect(() => {
    if (!elementRef.current || !observerRef.current) {
      return;
    };

    const element = elementRef.current;
    const observer = observerRef.current;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, observerRef]);

  return isIntersecting;
};

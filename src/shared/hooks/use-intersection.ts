import { useEffect, useRef, RefObject, useState } from 'react';

export const useIntersection = (targetRef: RefObject<Element>, options?: IntersectionObserverInit) => {
  const observerRef = useRef<IntersectionObserver>();
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          setIsIntersecting(entries.some(({ isIntersecting }) => isIntersecting));
        },
        options,
      );
    };
  }, [options]);

  useEffect(() => {
    if (!targetRef.current || !observerRef.current) {
      return;
    };

    const element = targetRef.current;
    const observer = observerRef.current;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [targetRef, observerRef]);

  return isIntersecting;
};

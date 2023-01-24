import { useEffect, useRef, useCallback } from 'react';

type Timeout = ReturnType<typeof setTimeout>

const horizontalWheelScrollDelayInMs = 500;

export const useHorizontalScroll = <T extends HTMLElement = HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const timerRef = useRef<Nullable<Timeout>>(null);

  const handleWheel = useCallback((event: WheelEvent) => {
    const element = elementRef.current;
    const { deltaX, deltaY } = event;

    if (!element || deltaX !== 0) {
      return;
    }

    if (
      !(element.scrollLeft === 0 && deltaY < 0)
      && !(element.scrollWidth - element.clientWidth - Math.round(element.scrollLeft) === 0 && deltaY > 0)
    ) {
      event.preventDefault();
    }

    element.scrollLeft += event.deltaY;
  }, []);

  const disablePointerEvents = useCallback(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    element.style.pointerEvents = 'none';

    timerRef.current = setTimeout(() => {
      element.style.pointerEvents = 'auto';
    }, horizontalWheelScrollDelayInMs);
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    document.addEventListener('scroll', disablePointerEvents);
    element.addEventListener('wheel', handleWheel);

    return () => {
      document.removeEventListener('scroll', disablePointerEvents);
      element.removeEventListener('wheel', handleWheel);
    };
  }, [disablePointerEvents, handleWheel]);

  return elementRef;
};

import { useEffect, useRef, useCallback } from 'react';

type Timeout = ReturnType<typeof setTimeout>

type DragStats = {
  x: number
  scrollLeft: number
}

const horizontalWheelScrollDelayInMs = 500;
const horizontalDraggingSpeedMultiplier = 2;

export const useHorizontalScroll = <T extends HTMLElement = HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const timerRef = useRef<Nullable<Timeout>>(null);
  const dragStats = useRef<Nullable<DragStats>>(null);

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

  const handleMouseDown = useCallback((event: MouseEvent) => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    dragStats.current = {
      x: event.pageX - element.offsetLeft,
      scrollLeft: element.scrollLeft,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    dragStats.current = null;
  }, []);

  const handleMouseDrag = useCallback((event: MouseEvent) => {
    const element = elementRef.current;

    if (!element || !dragStats.current) {
      return;
    }

    event.preventDefault();

    const x = event.pageX - element.offsetLeft;
    const offset = (x - dragStats.current.x) * horizontalDraggingSpeedMultiplier;

    element.scrollLeft = dragStats.current.scrollLeft - offset;
  }, []);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    document.addEventListener('scroll', disablePointerEvents);
    element.addEventListener('wheel', handleWheel);
    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mouseup', handleMouseLeave);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseDrag);

    return () => {
      document.removeEventListener('scroll', disablePointerEvents);
      element.removeEventListener('wheel', handleWheel);
      element.removeEventListener('mouseup', handleMouseLeave);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mousemove', handleMouseDrag);
    };
  }, [disablePointerEvents, handleWheel, handleMouseDown, handleMouseLeave, handleMouseDrag]);

  return elementRef;
};

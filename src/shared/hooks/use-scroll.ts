import { useEffect } from 'react';
import { throttle } from 'shared/helpers/throttle';

export const useScroll = (onScroll: () => void) => {
  const handler = throttle(onScroll, 500);
  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }), [];
};

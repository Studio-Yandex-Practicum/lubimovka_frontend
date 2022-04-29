import { useEffect, useRef } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';

import * as breakpoints from 'shared/breakpoints';
import { useMediaQuery } from 'shared/hooks/use-media-query';

enum ScrollMode {
  FullScreen,
  Regular,
}

enum ScrollDirection {
  Up,
  Down,
}

const SCROLL_SPEED = 8;

export const useWelcomeScreenScroll = () => {
  const ref = useRef(typeof window === 'undefined' ? null : document.documentElement);
  const scrollMode = useRef(ScrollMode.FullScreen);
  const welcomeScreenBottomElementRef = useRef<HTMLElement>(null);
  const intersectionObserverRef = useRef<IntersectionObserver>();
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const { scrollTo } = useSmoothScroll({
    ref,
    speed: SCROLL_SPEED,
    direction: 'y',
  });

  const handleScroll = (event: WheelEvent) => {
    if (scrollMode.current === ScrollMode.Regular || !welcomeScreenBottomElementRef.current) return;

    //@ts-ignore
    const scrollDirection = (event.wheelDelta|| -event.deltaY || -event.detail) < 0
      ? ScrollDirection.Down
      : ScrollDirection.Up;
    const reachedTop = document.documentElement.scrollTop <= 0;

    if (scrollDirection === ScrollDirection.Up && reachedTop) return;

    event.preventDefault();
    event.stopPropagation();

    const nextScrollPosition = scrollDirection === ScrollDirection.Down
      ? welcomeScreenBottomElementRef.current.getBoundingClientRect().bottom + 1
      : -document.documentElement.scrollTop;

    scrollTo(nextScrollPosition);
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    scrollMode.current = entries.some(({ isIntersecting }) => isIntersecting)
      ? ScrollMode.FullScreen
      : ScrollMode.Regular;
  };

  useEffect(() => {
    if (isMobile) return;

    if ('IntersectionObserver' in window) {
      intersectionObserverRef.current = new IntersectionObserver(handleIntersection);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    if (welcomeScreenBottomElementRef.current) {
      intersectionObserverRef.current?.observe(welcomeScreenBottomElementRef.current);
      document.addEventListener('wheel', handleScroll, { passive: false });

      return () => {
        intersectionObserverRef.current?.disconnect();
        document.removeEventListener('wheel', handleScroll);
      };
    }
  }, [isMobile]);

  return [welcomeScreenBottomElementRef];
};

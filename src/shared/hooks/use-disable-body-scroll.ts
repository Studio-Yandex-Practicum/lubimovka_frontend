import { disableBodyScroll, enableBodyScroll } from '@funboxteam/diamonds';
import { useEffect } from 'react';

export const useDisableBodyScroll = (active: boolean): void => {
  useEffect(() => {
    active
      ? disableBodyScroll({ savePosition: true })
      : enableBodyScroll();

    return () => enableBodyScroll();
  }, [active]);
};

import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from '@funboxteam/diamonds';

export const useDisableBodyScroll = (active: boolean): void => {
  useEffect(() => {
    active
      ? disableBodyScroll({ savePosition: true })
      : enableBodyScroll();
    return () => enableBodyScroll();
  }, [active]);
};

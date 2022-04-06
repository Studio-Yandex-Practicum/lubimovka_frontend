import { Nullable } from 'shared/types';

export function throttle(cb: Function, timeout: number = 0) {
  let timer: Nullable<NodeJS.Timeout>  = null;

  return function perform(...args: unknown[]) {
    if (timer) return;

    timer = setTimeout(() => {
      cb(...args);
      if (timer) {
        clearTimeout(timer);
      };
      timer = null;
    }, timeout);
  };
};

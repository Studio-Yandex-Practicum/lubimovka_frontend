import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

export const useDidMountEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;

      return;
    }

    return effect();
  }, deps);
};

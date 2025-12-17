import { useState, useCallback } from 'react';

export const useBoolean = (initial = false) => {
  const [value, setValue] = useState(initial);

  return {
    value,
    setValue,
    toggle: useCallback(() => setValue((prevValue) => !prevValue), []),
    setTrue: useCallback(() => setValue(true), []),
    setFalse: useCallback(() => setValue(false), []),
  };
};

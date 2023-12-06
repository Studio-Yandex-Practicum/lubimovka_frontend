import debounce from 'lodash/debounce';
import { useCallback } from 'react';

export const useDebounce = (func: () => void, wait = 500) => {
  return useCallback(debounce(func, wait), [func, wait]);
};

export default useDebounce;

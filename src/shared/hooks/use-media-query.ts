import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    if (mediaQueryList.matches !== matches) {
      setMatches(mediaQueryList.matches);
    }

    const onChange = (mediaQueryList: MediaQueryListEvent) => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', onChange);

    return () => mediaQueryList.removeEventListener('change', onChange);
  }, [query]);

  return matches;
};

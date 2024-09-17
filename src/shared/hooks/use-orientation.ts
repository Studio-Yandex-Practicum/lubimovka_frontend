import { useEffect, useState } from 'react';

const isSupported = typeof window !== 'undefined' && 'screen' in window && 'orientation' in window.screen;

const useOrientation = () => {
  const screenOrientation = (isSupported ? window.screen.orientation : {}) as ScreenOrientation;

  const [orientation, setOrientation] = useState(screenOrientation?.type);

  useEffect(() => {
    if (!isSupported) {
      return;
    }

    const handleOrientationChange = () => setOrientation(screenOrientation.type);

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return orientation;
};

export default useOrientation;

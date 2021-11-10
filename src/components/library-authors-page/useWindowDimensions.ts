import { useState, useEffect } from 'react';

function getWindowDimensions(): {width: number, height: number} {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions(): {width: number, height: number} {
  const [windowDimensions, setWindowDimensions] = useState<{width: number, height: number}>({width: 0, height: 0});

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

import { useState, useEffect } from 'react';

interface IWindowDimensions {
  width: number,
  height: number
}

function getWindowDimensions(): IWindowDimensions {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions(): IWindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>({width: 0, height: 0});

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

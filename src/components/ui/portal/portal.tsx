import { useEffect,useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: React.ReactNode
}

export const Portal = ({ children }: IPortalProps): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);

  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    // Из-за SSR, document доступен только после монтирования,
    // в связи с этим необходимо использовать useRef и useEffect.
    ref.current = document.createElement('div');
    setMounted(true);
  }, []);

  useEffect(() => {
    ref.current && document.body.appendChild(ref.current);

    return () => {
      ref.current && document.body.removeChild(ref.current);
    };
  }, []);

  return (mounted && ref.current) ? createPortal(children, ref.current) : null;
};

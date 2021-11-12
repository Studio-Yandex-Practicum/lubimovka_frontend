import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: IPortalProps): JSX.Element => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};

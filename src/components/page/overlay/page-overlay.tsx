import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { disableBodyScroll, enableBodyScroll } from '@funboxteam/diamonds';

import styles from './page-overlay.module.css';

const cx = classNames.bind(styles);

interface IPageOverlayProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const PageOverlay = (props: IPageOverlayProps): JSX.Element => {
  const { isOpen, children } = props;

  useEffect(() => {
    isOpen ? disableBodyScroll() : enableBodyScroll();
  }, [isOpen]);

  return (
    <div className={cx('overlay', { visible: isOpen })}>
      {children}
    </div>
  );
};

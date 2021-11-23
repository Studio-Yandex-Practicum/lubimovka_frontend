import classNames from 'classnames/bind';

import styles from './page-overlay.module.css';
import { useDisableBodyScroll } from 'shared/hooks/use-disable-body-scroll';

const cx = classNames.bind(styles);

interface IPageOverlayProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const PageOverlay = (props: IPageOverlayProps): JSX.Element => {
  const { isOpen, children } = props;

  useDisableBodyScroll(isOpen);

  return (
    <div className={cx('overlay', { visible: isOpen })}>
      {children}
    </div>
  );
};

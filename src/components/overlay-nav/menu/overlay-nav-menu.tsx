import classNames from 'classnames/bind';

import styles from './overlay-nav-menu.module.css';

const cx = classNames.bind(styles);

interface IOverlayNavMenuProps {
  children: React.ReactNode
}

export const OverlayNavMenu = (props: IOverlayNavMenuProps): JSX.Element => {
  const { children } = props;

  return (
    <nav className={cx('menu')}>
      {children}
    </nav>
  );
};

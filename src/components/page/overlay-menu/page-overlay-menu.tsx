import classNames from 'classnames/bind';

import styles from './page-overlay-menu.module.css';

const cx = classNames.bind(styles);

interface IPageOverlayMenuProps {
  isOpen: boolean
  children: React.ReactNode
}

export const PageOverlayMenu = (props: IPageOverlayMenuProps): JSX.Element => {
  const { isOpen, children } = props;

  return (
    <div className={cx('menu', { visible: isOpen })}>
      {children}
    </div>
  );
};

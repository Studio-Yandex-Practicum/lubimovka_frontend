import classNames from 'classnames/bind';

import styles from './navbar.module.css';

export interface NavbarProps {
  view?: 'regular' | 'expanded',
  colors?: 'default' | 'brand',
}

const cx = classNames.bind(styles);

export const Navbar = (props: React.PropsWithChildren<NavbarProps>) => {
  const {
    view = 'regular',
    colors = 'default',
    children,
  } = props;

  return (
    <div className={cx(
      view,
      { brand: colors === 'brand' }
    )}
    >
      {children}
    </div>
  );
};

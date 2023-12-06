import classNames from 'classnames/bind';

import { PageBurgerButton } from './burger-button';
import { PageFooter } from './footer';
import { PageNavbar } from './navbar';
import { PageOverlayMenu } from './overlay-menu';

import styles from './page.module.css';

const cx = classNames.bind(styles);

const Component: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={cx('root')}>
      {children}
    </div>
  );
};

Component.displayName = 'Page';

export default Object.assign(Component, {
  BurgerButton: PageBurgerButton,
  Navbar: PageNavbar,
  Footer: PageFooter,
  OverlayMenu: PageOverlayMenu,
});

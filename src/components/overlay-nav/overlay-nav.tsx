import classNames from 'classnames/bind';

import { OverlayNavLogotype } from './logotype';
import { OverlayNavMenu } from './menu';
import { OverlayNavActions } from './actions';
import { OverlayNavSocials } from './socials';
import { OverlayNavCopyright } from './copyright';

import styles from './overlay-nav.module.css';

const cx = classNames.bind(styles);

interface IOverlayNavProps {
  children: React.ReactNode;
}

export const OverlayNav = (props: IOverlayNavProps): JSX.Element => {
  const { children } = props;

  return (
    <section className={cx('overlayNav')}>
      {children}
    </section>
  );
};

OverlayNav.Logotype = OverlayNavLogotype;
OverlayNav.Menu = OverlayNavMenu;
OverlayNav.Actions = OverlayNavActions;
OverlayNav.Socials = OverlayNavSocials;
OverlayNav.Copyright = OverlayNavCopyright;

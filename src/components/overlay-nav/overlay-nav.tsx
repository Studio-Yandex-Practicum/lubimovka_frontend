import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { disableBodyScroll, enableBodyScroll } from '@funboxteam/diamonds';


import { Logotype } from 'components/logotype';
import { Icon } from 'components/ui/icon';
import { Menu } from 'components/ui/menu';
import { Url } from 'shared/types';

import styles from './overlay-nav.module.css';
const cx = classNames.bind(styles);

interface ILink {
  text: string;
  href: Url;
}

interface ISocialLink extends ILink {
  primary?: boolean;
}

interface IOverlayNavProps {
  isOpen: boolean;
  navLinks: ILink[];
  actionLinks: ILink[];
  socialLinks: ISocialLink[];
}

export const OverlayNav = (props: IOverlayNavProps): JSX.Element => {
  const {
    isOpen,
    navLinks,
    actionLinks,
    socialLinks,
  } = props;

  useEffect(() => {
    isOpen ? disableBodyScroll() : enableBodyScroll();
  }, [isOpen]);

  return (
    <div className={cx('overlayNav', { visible: isOpen })}>
      <section className={cx('container')}>
        <Logotype className={cx('logotype')} href='/' />
        <Menu className={cx('menu')} type="overlay-navigation">
          {navLinks.map((item, idx) => (
            <Menu.Item key={idx} href={item.href}>
              {item.text}
            </Menu.Item>
          ))}
        </Menu>
        <Menu className={cx('actions')} type='overlay-actions'>
          {actionLinks.map((item, idx) => (
            <Menu.Item key={idx} href={item.href}>
              {item.text}
              <Icon glyph='arrow-right' />
            </Menu.Item>
          ))}
        </Menu>
        <Menu className={cx('social-links')} type='overlay-social-links'>
          {socialLinks.map((item, idx) => (
            <Menu.Item key={idx} href={item.href} className={cx({ primary: item.primary })}>
              {item.text}
              <Icon glyph='arrow-right' />
            </Menu.Item>
          ))}
        </Menu>
      </section>
    </div>
  );
};

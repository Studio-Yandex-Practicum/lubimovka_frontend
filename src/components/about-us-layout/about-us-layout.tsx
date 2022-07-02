import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

import { Menu } from 'components/ui/menu';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import { remToPx } from 'shared/helpers/rem-to-px';

import { aboutUsNavigationItems } from 'shared/constants/about-us-navigation-items';
import breakpoints from 'shared/breakpoints';

import { FC, useEffect, useRef } from 'react';

import styles from './about-us-layout.module.css';
import vars from './about-us-layout.vars.module.css';

interface AboutUsLayoutProps {
  colors?: 'default' | 'brand'
}

const cx = classNames.bind(styles);

const menuPaddingMobileRem = parseFloat(vars['menu-padding-mobile']);

export const AboutUsLayout: FC<AboutUsLayoutProps> = (props) => {
  const {
    children,
    colors,
  } = props;
  const router = useRouter();
  const menuRef = useRef<HTMLUListElement>(null);
  const currentMenuItemRef = useRef<HTMLLIElement>(null);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);

  useEffect(() => {
    if (menuRef.current && currentMenuItemRef.current) {
      const menuPaddingMobilePx = remToPx(menuPaddingMobileRem);

      const currentLinkOffset = currentMenuItemRef.current.offsetLeft - menuPaddingMobilePx;

      menuRef.current.scrollLeft = currentLinkOffset;
    }
  }, [isMobile]);

  return (
    <div className={cx(colors)}>
      <div className={cx('menu')}>
        <Menu
          type="about-us-navigation"
          ref={menuRef}
        >
          {aboutUsNavigationItems
            .map((item) => {
              const current = router.asPath === item.href;

              return (
                <Menu.Item
                  key={item.href}
                  href={item.href}
                  current={current}
                  {...current ? {
                    ref: currentMenuItemRef,
                  } : {}}
                >
                  {item.text}
                </Menu.Item>
              );
            })}
        </Menu>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

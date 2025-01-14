import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { Menu } from 'components/ui/menu';
import { useSettings } from 'services/api/settings-adapter';
import breakpoints from 'shared/breakpoints';
import { aboutUsNavigationItems, historyRouteItems } from 'shared/constants/about-us-navigation-items';
import { remToPx } from 'shared/helpers/rem-to-px';
import { useMediaQuery } from 'shared/hooks/use-media-query';

import type { FC } from 'react';

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
  const { settings } = useSettings();
  const menuRef = useRef<HTMLUListElement>(null);
  const currentMenuItemRef = useRef<HTMLLIElement>(null);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const permissions = settings?.permissions;
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
          {aboutUsNavigationItems.filter(item => permissions && permissions[item.id]).concat(historyRouteItems)
            .map((item) => {
              let current;
              if (item.id === 'about-us') {
                current = router.asPath === item.href;
              } else {
                current = router.asPath.startsWith(item.href);
              }

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

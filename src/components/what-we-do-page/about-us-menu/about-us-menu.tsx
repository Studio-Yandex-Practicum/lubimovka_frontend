import { FC } from 'react';
import { useRouter } from 'next/router';

import { Menu } from 'components/ui/menu';
import { navbarNavigationItems, INavbar } from 'shared/constants/navbar-navigation-items';

export const AboutUsMenu: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <Menu type={'general-submenu'}>
      {navbarNavigationItems.map((list: INavbar) => (
        <Menu.Item
          key={list.id}
          href={list.href}
          current={router.asPath === list.href}
        >
          {list.text}
        </Menu.Item>
      ))}
    </Menu>
  );
};

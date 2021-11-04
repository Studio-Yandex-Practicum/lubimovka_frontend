import { Menu } from 'components/ui/menu';

// data json
import submenuData from 'components/ui/menu/submenu/submenu-data.json';

interface ISubmenu {
  text: string
  href: string
}

export const Submenu = (): JSX.Element => {
  return (
    <Menu type={ 'general-submenu' }>
      {submenuData.map((submenu: ISubmenu, i) => (
        <Menu.Item
          key={i}
          href={submenu.href}
        >
          {submenu.text}
        </Menu.Item>
      ))}
    </Menu>
  );
};
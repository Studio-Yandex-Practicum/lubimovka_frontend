import { FC } from 'react';
import cn from 'classnames';
import { Menu } from 'components/ui/menu';

import styles from './submenu.module.css';

interface ISubmenu {
  text: string,
  href: string
}

interface ISubmenuForTeam {
  submenu: Array<ISubmenu>
}

const Submenu: FC<ISubmenuForTeam> = ({ submenu }) => {

  return (
    <div className={cn(styles.menu)}>
      <Menu type={'general-submenu'}>
        {submenu.map(item => (
          <Menu.Item
            key={item.text}
            href={item.href}
          >
            {item.text}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Submenu;

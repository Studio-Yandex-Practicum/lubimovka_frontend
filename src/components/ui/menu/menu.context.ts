import { createContext, useContext } from 'react';

import { MenuType } from './menu';

type MenuContext = {
  type: MenuType;
}

const MenuContext = createContext<MenuContext>({
  type: 'main-navigation',
});

export const MenuProvider = MenuContext.Provider;

export const useMenu = (): MenuContext => useContext(MenuContext);

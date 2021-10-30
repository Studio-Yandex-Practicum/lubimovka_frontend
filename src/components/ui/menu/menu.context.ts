import { createContext, useContext } from 'react';

import { MenuType } from './menu';

type MenuContext = {
  type: MenuType;
}

const MenuContext = createContext<MenuContext | undefined>(undefined);

export const MenuProvider = MenuContext.Provider;

export const useMenu = (): MenuContext => {
  const context = useContext(MenuContext);

  if (context === undefined) {
    throw new Error('The useMenu hook must be used within a MenuProvider');
  }

  return context;
};

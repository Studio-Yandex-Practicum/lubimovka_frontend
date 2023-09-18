'use client';

import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [someData, setSomeData] = useState(null);

  return (
    <AppContext.Provider value={{ someData, setSomeData }}>
      {children}
    </AppContext.Provider>
  );
}

'use client';

import { createContext, useState } from 'react';

export const AppContext = createContext<any>();

export function AppContextProvider({ children }) {
  const [someData, setSomeData] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ someData, setSomeData }}>
      {children}
    </AppContext.Provider>
  );
}

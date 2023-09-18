'use client';

import { createContext, useContext, useState } from 'react';

// Create the context
export const AppContext = createContext();

// Create a provider component
export function AppContextProvider({ children }) {
  const [someData, setSomeData] = useState(null);

  return (
    <AppContext.Provider value={{ someData, setSomeData }}>
      {children}
    </AppContext.Provider>
  );
}

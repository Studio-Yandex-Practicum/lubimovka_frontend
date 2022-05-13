import { createContext, useContext } from 'react';

type ConstructorContentContext = {
  styles: Record<string, string>
}

const ConstructorContentContext = createContext<ConstructorContentContext | undefined>(undefined);

export const ConstructorContentContextProvider = ConstructorContentContext.Provider;

export const useConstructorContent = (): ConstructorContentContext => {
  const context = useContext(ConstructorContentContext);

  if (context === undefined) {
    throw new Error('The useConstructorContent hook must be used within a ConstructorContentContextProvider');
  }

  return context;
};

import { createContext, ReactNode } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const value = {};

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

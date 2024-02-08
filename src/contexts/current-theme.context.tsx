import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export enum ThemeType {
  Light = 'light',
  Dark = 'dark',
}

type ThemeContextProps = {
  currentTheme: ThemeType;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const CurrentThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const CurrentThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(ThemeType.Light);

  const contextValue: ThemeContextProps = {
    currentTheme,
    setCurrentTheme,
  };

  return <CurrentThemeContext.Provider value={contextValue}>{children}</CurrentThemeContext.Provider>;
};

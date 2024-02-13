import { ReactNode, createContext, useState } from 'react';

export enum ThemeType {
  Light = 'light',
  Dark = 'dark',
}

const THEME_DATA = 'theme';

type ThemeContextProps = {
  currentTheme: ThemeType;
  setAndStoreCurrentTheme: (theme: ThemeType) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const getInitialTheme = (): ThemeType => {
  const themeItem = localStorage.getItem(THEME_DATA);

  if (themeItem) {
    return themeItem as ThemeType;
  }

  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDarkTheme ? ThemeType.Dark : ThemeType.Light;
};

export const CurrentThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const CurrentThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(getInitialTheme());

  const setAndStoreCurrentTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem(THEME_DATA, theme);
  };

  const contextValue: ThemeContextProps = {
    currentTheme,
    setAndStoreCurrentTheme,
  };

  return <CurrentThemeContext.Provider value={contextValue}>{children}</CurrentThemeContext.Provider>;
};

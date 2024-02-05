import React, { useContext } from 'react';

import { CurrentThemeContext, ThemeType } from '../../contexts/current-theme.context';
import {
  StyledMoonIcon,
  StyledSunIcon,
  StyledThemeSwitcherButton,
} from './theme-switcher.styles';

const ThemeSwitcher: React.FC = () => {
  const currentThemeContext = useContext(CurrentThemeContext);

  if (!currentThemeContext) {
    throw new Error('CurrentThemeContext is not provided');
  }

  const { currentTheme, setCurrentTheme } = currentThemeContext;

  const toggleThemeHandler = () => {
    setCurrentTheme(currentTheme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light);
  };

  return (
    <StyledThemeSwitcherButton onClick={toggleThemeHandler}>
      {currentTheme === ThemeType.Light ? (
        <>
          <StyledMoonIcon />
          <p className="sr-only">Toggle to Dark Mode</p>
        </>
      ) : (
        <>
          <StyledSunIcon />
          <p className="sr-only">Toggle to Light Mode</p>
        </>
      )}
    </StyledThemeSwitcherButton>
  );
};

export default ThemeSwitcher;

import React from 'react';

import { ThemeType } from '../../contexts/current-theme.context';
import useCurrentTheme from '../../hooks/useCurrentTheme.hook';
import { StyledMoonIcon, StyledSunIcon, StyledThemeSwitcherButton } from './theme-switcher.styles';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setCurrentTheme } = useCurrentTheme();

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

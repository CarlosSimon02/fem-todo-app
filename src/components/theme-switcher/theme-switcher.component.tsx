import { StyledMoonIcon, StyledThemeSwitcherButton } from './theme-switcher.styles';

const ThemeSwitcher = () => {
  return (
    <StyledThemeSwitcherButton>
      <StyledMoonIcon />
      <p className="sr-only">Toggle to Dark Mode</p>
    </StyledThemeSwitcherButton>
  );
};

export default ThemeSwitcher;

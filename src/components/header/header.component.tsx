import ThemeSwitcher from '../theme-switcher/theme-switcher.component';
import { StyledHeader, StyledLogo } from './header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>TODO</StyledLogo>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

export default Header;

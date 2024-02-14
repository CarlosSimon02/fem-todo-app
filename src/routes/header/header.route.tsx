import { Outlet } from 'react-router-dom';

// import AboutButton from '../../components/about-button/about-button.component';
import AboutButton from '../../components/about-button/about-button.component';
import ThemeSwitcher from '../../components/theme-switcher/theme-switcher.component';
import { StyledHeader, StyledIconsContainer, StyledLink } from './header.styles';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLink to="/">TODO</StyledLink>
        <StyledIconsContainer>
          <AboutButton />
          <ThemeSwitcher />
        </StyledIconsContainer>
      </StyledHeader>
      <Outlet />
    </>
  );
};

export default Header;

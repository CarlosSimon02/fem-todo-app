import { AnimatePresence, motion } from 'framer-motion';
import { v4 } from 'uuid';

import { ThemeType } from '../../contexts/current-theme.context';
import useCurrentTheme from '../../hooks/useCurrentTheme.hook';
import HeaderIconButton from '../header-icon-button/header-icon-button.component';
import { StyledMoonIcon, StyledSunIcon } from './theme-switcher.styles';

const AnimatedMoonIcon = motion(StyledMoonIcon);
const AnimatedSunIcon = motion(StyledSunIcon);

const iconAnimateProps = {
  transition: { duration: 0.7 },
  initial: { opacity: 0, rotate: 120 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: -120 },
};

const ThemeSwitcher = () => {
  const { currentTheme, setAndStoreCurrentTheme } = useCurrentTheme();

  const toggleThemeHandler = () => {
    const themeToSet = currentTheme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light;
    setAndStoreCurrentTheme(themeToSet);
  };

  return (
    <HeaderIconButton tapHandler={toggleThemeHandler} label={`Toggle to ${currentTheme as string}`}>
      <AnimatePresence initial={false}>
        {currentTheme === ThemeType.Light ? (
          <AnimatedMoonIcon key={v4()} {...iconAnimateProps} />
        ) : (
          <AnimatedSunIcon key={v4()} {...iconAnimateProps} />
        )}
      </AnimatePresence>
    </HeaderIconButton>
  );
};

export default ThemeSwitcher;

import { AnimatePresence, motion } from 'framer-motion';
import { v4 } from 'uuid';

import { ThemeType } from '../../contexts/current-theme.context';
import useCurrentTheme from '../../hooks/useCurrentTheme.hook';
import { StyledMoonIcon, StyledSunIcon, StyledThemeSwitcherButton } from './theme-switcher.styles';

const AnimatedThemeSwitcherButton = motion(StyledThemeSwitcherButton);
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
    <AnimatedThemeSwitcherButton
      onTap={toggleThemeHandler}
      whileHover={{ scale: 1.4, transition: { duration: 0.4 } }}
      whileTap={{ scale: 0.8, transition: { duration: 0.7 } }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      <AnimatePresence initial={false}>
        {currentTheme === ThemeType.Light ? (
          <AnimatedMoonIcon key={v4()} {...iconAnimateProps} />
        ) : (
          <AnimatedSunIcon key={v4()} {...iconAnimateProps} />
        )}
      </AnimatePresence>
      <p className="sr-only">Toggle to {currentTheme as string} mode</p>
    </AnimatedThemeSwitcherButton>
  );
};

export default ThemeSwitcher;

import { AnimatePresence, motion } from 'framer-motion';

import { ThemeType } from '../../contexts/current-theme.context';
import useCurrentTheme from '../../hooks/useCurrentTheme.hook';
import { DarkModeImage, LightModeImage, StyledBGImageContainer } from './bg-image.styles';

const AnimateDarkModeImage = motion(DarkModeImage);
const AnimateLightModeImage = motion(LightModeImage);

const imageAnimateProps = {
  transition: { duration: 0.7 },
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const BGImage = () => {
  const { currentTheme } = useCurrentTheme();
  return (
    <StyledBGImageContainer>
      <AnimatePresence initial={false}>
        {currentTheme === ThemeType.Light ? (
          <AnimateLightModeImage key="dark-image" {...imageAnimateProps} />
        ) : (
          <AnimateDarkModeImage key="light-image" {...imageAnimateProps} />
        )}
      </AnimatePresence>
    </StyledBGImageContainer>
  );
};

export default BGImage;

import { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { StyledButton } from './header-icon-button.styles';

type HeaderIconButtonProps = {
  children: ReactNode;
  label: string;
  tapHandler: () => void;
};

const AnimatedButton = motion(StyledButton);

const HeaderIconButton = ({ children, label, tapHandler }: HeaderIconButtonProps) => {
  return (
    <AnimatedButton
      onTap={tapHandler}
      whileHover={{ scale: 1.4, transition: { duration: 0.4 } }}
      whileTap={{ scale: 0.8, transition: { duration: 0.7 } }}
      transition={{ ease: 'easeOut', duration: 1 }}
    >
      {children}
      <p className="sr-only">{label}</p>
    </AnimatedButton>
  );
};

export default HeaderIconButton;

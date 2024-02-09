import { useEffect } from 'react';

import { AnimationSequence, motion, useAnimate } from 'framer-motion';

import { StyledCheckCircleIcon, StyledCheckIcon, StyledContainer, StyledGradient } from './checkbox.styles';

const AnimateCheckCircleIcon = motion(StyledCheckCircleIcon);
const AnimatedContainer = motion(StyledContainer);
const AnimatedCheckIcon = motion(StyledCheckIcon);
const AnimatedGradient = motion(StyledGradient);

export const CheckCircleIcon = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence1: AnimationSequence = [
      ['.circle-icon circle', { strokeDashoffset: [79, 0] }, { duration: 0.6, ease: [0.65, 0, 0.45, 1] }],
      ['.check-icon path', { strokeDashoffset: [23, 0] }, { delay: 0.2, duration: 0.8, ease: [0.65, 0, 0.45, 1] }],
    ];
    const sequence2: AnimationSequence = [
      [
        scope.current,
        {
          boxShadow: [
            'inset 0 0 0 0 hsl(192, 100%, 66.66666666666666%)',
            'inset 0 0 0 2rem hsl(192, 100%, 66.66666666666666%)',
          ],
        },
        { delay: 0.3, duration: 0.4, ease: 'easeInOut' },
      ],
      ['.gradient', { opacity: [0, 1], top: [10, 0], left: [10, 0] }, { duration: 0.2 }],
      [scope.current, { scale: [1, 1.3, 1] }, { delay: 0.4, duration: 0.5, ease: [0.65, 0, 0.45, 1] }],
    ];
    animate(sequence1);
    animate(sequence2);
  }, [animate, scope]);

  return (
    <AnimatedContainer ref={scope}>
      <AnimateCheckCircleIcon className="circle-icon" />
      <AnimatedGradient className="gradient" />
      <AnimatedCheckIcon className="check-icon" />
    </AnimatedContainer>
  );
};

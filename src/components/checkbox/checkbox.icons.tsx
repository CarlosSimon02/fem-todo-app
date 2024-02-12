import { useEffect } from 'react';

import { AnimationSequence, motion, useAnimate } from 'framer-motion';

import { CheckIndicatorIconProps, CircleProps, CircleSVGProps } from './checkbox.props';
import {
  AnimatedCheckCircleContainer,
  AnimatedGradient,
  CheckContainerSVG,
  CheckIconSVG,
  CheckIndicatorCircleSVG,
  lightblue,
} from './checkbox.styles';

export const CheckContainerIcon = () => {
  return (
    <CheckContainerSVG {...CircleSVGProps}>
      <circle {...CircleProps} />;
    </CheckContainerSVG>
  );
};

export const CheckIndicatorIcon = ({ isTransitionEnabled }: CheckIndicatorIconProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence: AnimationSequence = [
      ['.bg-circle', { strokeDashoffset: [59.68979, 0] }, { duration: 0.5, ease: [0.65, 0, 0.45, 1] }],
      [
        scope.current,
        {
          boxShadow: [
            'inset 0 0 0 0 hsl(192, 100%, 66.66666666666666%)',
            'inset 0 0 0 2rem hsl(192, 100%, 66.66666666666666%)',
          ],
        },
        { duration: 0.4, ease: 'easeInOut' },
      ],
      ['.bg-gradient', { opacity: [0, 1], top: ['.8rem', '0'], left: ['.8rem', '0'] }, { duration: 0.2 }],
      ['.check-icon', { strokeDashoffset: [23, 0] }, { at: '-0.2', duration: 0.8, ease: [0.65, 0, 0.45, 1] }],
      [scope.current, { scale: [1, 1.3, 1] }, { at: '-0.4', duration: 0.5, ease: [0.65, 0, 0.45, 1] }],
    ];

    isTransitionEnabled && animate(sequence);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, scope]);

  return (
    <AnimatedCheckCircleContainer ref={scope}>
      <CheckIndicatorCircleSVG {...CircleSVGProps}>
        <motion.circle
          {...CircleProps}
          className="bg-circle"
          stroke={lightblue}
          strokeDasharray="59.68979"
          strokeDashoffset="0"
          style={{ rotate: -90 }}
        />
      </CheckIndicatorCircleSVG>
      <AnimatedGradient className="bg-gradient" />
      <CheckIconSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9">
        <motion.path
          className="check-icon"
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          d="M1 4.304L3.696 7l6-6"
          strokeDasharray="23"
          strokeDashoffset="0"
        />
      </CheckIconSVG>
    </AnimatedCheckCircleContainer>
  );
};

export default CheckIndicatorIcon;

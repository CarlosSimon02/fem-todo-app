import styled from 'styled-components';

import { ReactComponent as AboutSVG } from '../../assets/about.svg';
import FillContainer from '../../styles/common/fillContainer';

export const AboutIcon = styled(AboutSVG)`
  ${FillContainer}
  stroke: white;

  & path {
    fill: white;
  }
`;

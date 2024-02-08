import styled from 'styled-components';

import FONT_WEIGHTS from '../constants/font-weights';

const MainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.body.background};
  color: ${({ theme }) => theme.color.body.text};
  font-family: 'Josefin Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: ${FONT_WEIGHTS.REGULAR};
  font-style: normal;
  z-index: -100;
`;

export default MainBackground;

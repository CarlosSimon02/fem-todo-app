import styled from 'styled-components';

import { ReactComponent as CrossSVG } from '../../assets/icon-cross.svg';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledRemoveItemButton = styled.button`
  cursor: pointer;
  width: ${fluidSizeMobileToDesktop(12, 18)};
  height: ${fluidSizeMobileToDesktop(12, 18)};
  position: absolute;
  right: ${pxToRem(20)};
  top: ${fluidSizeMobileToDesktop(20, 23)};
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover path {
    fill: ${({ theme }) => theme.color.linkButton.hover};
  }
`;

export const StyledCrossIcon = styled(CrossSVG)`
  width: 100%;
  height: 100%;

  & path {
    fill: ${({ theme }) => theme.color.crossIcon.fill};
  }
`;

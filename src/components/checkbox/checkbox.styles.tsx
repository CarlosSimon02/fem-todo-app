import styled from 'styled-components';

import { ReactComponent as CheckSVG } from '../../assets/icon-check.svg';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledCheckboxContainer = styled.div`
  cursor: pointer;
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};
  position: absolute;
  left: ${pxToRem(20)};
  top: 50%;
  transform: translateY(-50%);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.unchecked {
    border: ${pxToRem(1.8)} solid ${({ theme }) => theme.color.checkbox.border};
  }

  &.checked {
    background-image: linear-gradient(to bottom right, hsl(192, 100%, 66.66%), hsl(280.26, 86.59%, 64.9%));
  }
`;

export const StyledCheckIcon = styled(CheckSVG)`
  width: ${pxToRem(10)};
  height: ${pxToRem(8)};
`;

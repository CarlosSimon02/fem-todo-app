import styled from 'styled-components';

import LinkButton from '../../styles/common/linkButton';
import MainBox from '../../styles/common/mainBox';
import FONT_WEIGHTS from '../../styles/constants/font-weights';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledFieldSet = styled.fieldset`
  border: none;
  gap: ${pxToRem(18)};
  display: flex;

  &.isolated {
    ${MainBox}
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${pxToRem(15)};
  }

  &.integrated {
    padding: 0;
  }
`;

export const StyledLabel = styled.label`
  ${LinkButton}
  font-size: ${pxToRem(14)};
  font-weight: ${FONT_WEIGHTS.BOLD};

  input[type='radio']:checked + p {
    color: ${({ theme }) => theme.color.accent.main};
  }
`;

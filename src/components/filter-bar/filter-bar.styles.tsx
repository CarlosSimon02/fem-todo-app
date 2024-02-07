import styled from 'styled-components';

import LinkButton from '../../styles/common/linkButton';
import FONT_WEIGHTS from '../../styles/constants/font-weights';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledFieldSet = styled.fieldset`
  padding: 0;
  border: none;
  gap: ${pxToRem(18)};
  display: flex;

  .isolated {
  }

  .integrated {
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

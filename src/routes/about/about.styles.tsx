import styled, { css } from 'styled-components';

import { ReactComponent as BackSVG } from '../../assets/back.svg';
import { ReactComponent as GithubSVG } from '../../assets/github.svg';
import { ReactComponent as LinkSVG } from '../../assets/link.svg';
import ItemBox from '../../styles/common/itemBox';
import MainBox from '../../styles/common/mainBox';
import FONT_WEIGHTS from '../../styles/constants/font-weights';
import { fluidSizeMobileToDesktop } from '../../styles/functions/fluidSize';
import pxToRem from '../../styles/functions/pxToRem';

export const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
`;

export const StyledBackButton = styled.button`
  ${MainBox}
  ${ItemBox}
  border-style: none;
  cursor: pointer;
  padding: ${pxToRem(12)};
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
  color: ${({ theme }) => theme.color.inputText.placeholder};

  &:hover {
    color: ${({ theme }) => theme.color.linkButton.hover};

    & path {
      fill: ${({ theme }) => theme.color.linkButton.hover};
    }
  }
`;

export const StyledCard = styled.div`
  ${MainBox};
  ${ItemBox};
  display: flex;
  gap: ${pxToRem(20)};
  padding: ${pxToRem(30)};
`;

export const StyledImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  border-radius: 100%;
  width: ${fluidSizeMobileToDesktop(60, 100)};
  height: ${fluidSizeMobileToDesktop(60, 100)};
`;

export const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
`;

export const StyledLabel = styled.p`
  font-weight: ${FONT_WEIGHTS.SEMI_BOLD};
  font-size: ${fluidSizeMobileToDesktop(12, 16)};
`;

export const StyledNoun = styled.h1`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: ${fluidSizeMobileToDesktop(20, 28)};
`;

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};

  & a {
    color: ${({ theme }) => theme.color.inputText.placeholder};

    &:hover {
      color: ${({ theme }) => theme.color.linkButton.hover};
    }
  }
`;

const StyledIcon = css`
  width: ${pxToRem(20)};
  height: ${pxToRem(20)};

  & path {
    fill: ${({ theme }) => theme.color.inputText.placeholder};
  }
`;

export const StyledBackIcon = styled(BackSVG)`
  ${StyledIcon}
`;

export const StyledGithubIcon = styled(GithubSVG)`
  ${StyledIcon}
`;

export const StyledLinkIcon = styled(LinkSVG)`
  ${StyledIcon}
`;

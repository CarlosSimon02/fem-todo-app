import { css } from 'styled-components';

const LinkButton = css`
  cursor: pointer;
  border-style: none;
  background-color: transparent;
  padding: 0;
  color: inherit;

  &:hover {
    color: ${({ theme }) => theme.color.linkButton.hover};
  }
`;

export default LinkButton;

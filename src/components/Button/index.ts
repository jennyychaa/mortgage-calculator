import styled from '@emotion/styled';

import { theme } from '@/themes';

const BaseButton = styled.button`
  border: 2px solid ${theme.colors.lightPurple};
  border-radius: ${theme.layout.space50};
  padding: ${theme.layout.space100} ${theme.layout.space150};
  font-size: ${theme.typography.fs87};
  font-weight: ${theme.typography.fw500};
  transition: 0.3s ease all;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const Button = styled(BaseButton)`
  width: 100%;
  background-color: ${theme.colors.lightPurple};
  color: ${theme.colors.darkPurple};

  &:hover,
  &:focus {
    background-color: ${theme.colors.darkPurple};
    color: ${theme.colors.lightPurple};
  }
`;

export const OutlineButton = styled(BaseButton)`
  background-color: transparent;
  color: ${theme.colors.lightPurple};

  &:hover,
  &:focus {
    background-color: ${theme.colors.lightPurple};
    color: ${theme.colors.darkPurple};
  }
`;

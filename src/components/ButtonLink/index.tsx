import { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import styled from '@emotion/styled';

import { theme } from '@/themes';

const StyledButtonLink = styled(Link)`
  border: 2px solid ${theme.colors.lightPurple};
  border-radius: ${theme.layout.space50};
  background-color: ${theme.colors.lightPurple};
  padding: ${theme.layout.space150};
  font-size: ${theme.typography.fs87};
  font-weight: ${theme.typography.fw500};
  text-decoration: none;
  color: ${theme.colors.darkPurple};
  transition: 0.3s ease background-color;

  &:hover,
  &:focus {
    background-color: ${theme.colors.darkPurple};
    color: ${theme.colors.lightPurple};
  }
`;

const ButtonLink = ({
  href,
  children,
  ...linkProps
}: PropsWithChildren<LinkProps>) => {
  return (
    <StyledButtonLink href={href} {...linkProps}>
      {children}
    </StyledButtonLink>
  );
};

export default ButtonLink;

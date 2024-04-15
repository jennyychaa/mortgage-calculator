import styled from '@emotion/styled';

import { theme } from '@/themes';
import { PropsWithChildren } from 'react';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.darkPurple};
`;

const ContentWrapper = styled.div`
  max-width: ${theme.layout.contentWrapperMaxWidth};
  margin: 0 auto;
  padding: 0 ${theme.layout.space400};
  color: ${theme.colors.white};
`;

const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <LayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;

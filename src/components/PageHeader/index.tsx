import styled from '@emotion/styled';

import { theme } from '@/themes';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: ${theme.layout.space300} ${theme.layout.space200};
`;

const PageHeader = () => {
  return (
    <HeaderWrapper>
      <h1>🏡 Mortgage Calculator</h1>
    </HeaderWrapper>
  );
};

export default PageHeader;

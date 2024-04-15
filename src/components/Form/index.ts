import styled from '@emotion/styled';

import { theme } from '@/themes';

export const Form = styled.form`
  margin-top: ${theme.layout.space500};
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: ${theme.layout.space100};
  margin-bottom: ${theme.layout.space300};
`;

export const FormButtons = styled.div`
  display: flex;
  grid-gap: ${theme.layout.space150};
  justify-content: space-between;
  margin-top: ${theme.layout.space500};
`;

export const Label = styled.label`
  display: block;
  font-size: ${theme.typography.fs87};
`;

export const Legend = styled.legend`
  display: block;
  margin-bottom: ${theme.layout.space100};
  font-size: ${theme.typography.fs87};
`;

export const InputIconWrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: 0;
  border-radius: ${theme.layout.space50};
  padding: ${theme.layout.space100};

  &:focus {
    outline: 2px solid ${theme.colors.lightPurple};
  }
`;

export const InputWithLeftIcon = styled(Input)`
  width: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const InputWithRightIcon = styled(Input)`
  width: 100%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const InputIcon = styled.div`
  background-color: ${theme.colors.lightGray};
  padding: ${theme.layout.space100} ${theme.layout.space150};
  color: ${theme.colors.black};
`;

export const LeftInputIcon = styled(InputIcon)`
  border-top-left-radius: ${theme.layout.space50};
  border-bottom-left-radius: ${theme.layout.space50};
`;

export const RightInputIcon = styled(InputIcon)`
  border-top-right-radius: ${theme.layout.space50};
  border-bottom-right-radius: ${theme.layout.space50};
`;

export const RadioCardWrapper = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  grid-gap: ${theme.layout.space200};

  @media (min-width: ${theme.breakpoints.tablet_small}) {
    flex-wrap: nowrap;
  }
`;

export const RadioCard = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: ${theme.layout.space50};
  background-color: ${theme.colors.purple};
  padding: ${theme.layout.space200} ${theme.layout.space400};
  color: ${theme.colors.white};
`;

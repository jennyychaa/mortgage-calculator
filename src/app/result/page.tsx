'use client';

import { useEffect } from 'react';
import styled from '@emotion/styled';

import { useMortgageCalculator } from '@/contexts/useMortgageCalculator';
import { theme } from '@/themes';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import ButtonLink from '@/components/ButtonLink';

const Loader = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  padding: ${theme.layout.space500} ${theme.layout.space200};
`;

const Subtitle = styled.h2`
  margin-bottom: ${theme.layout.space300};
`;

const LargeText = styled.p`
  margin-bottom: ${theme.layout.space500};
  font-size: ${theme.typography.fs125};
  line-height: 1.25;
  text-align: center;

  strong {
    font-weight: ${theme.typography.fw700};
    color: ${theme.colors.blue};
  }
`;

const DetailItem = styled.div`
  display: flex;
  grid-gap: ${theme.layout.space200};
  margin-bottom: ${theme.layout.space200};
  font-size: ${theme.typography.fs87};
`;

const DetailLabel = styled.span`
  width: 50%;
  font-weight: ${theme.typography.fw500};

  @media (min-width: ${theme.breakpoints.tablet_small}) {
    width: 30%;
  }
`;

const Detail = styled.span`
  width: 50%;

  @media (min-width: ${theme.breakpoints.tablet_small}) {
    width: 70%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${theme.layout.space500};
`;

export default function ResultPage() {
  const {
    data: { isCalculating, name, loan, mortgagePayment },
    action: { calculateMortgagePayment },
  } = useMortgageCalculator();

  console.log({ name }, { loan }, { mortgagePayment });

  useEffect(() => {
    calculateMortgagePayment();
  }, []);

  return (
    <Layout>
      <PageHeader />
      <ContentWrapper>
        {isCalculating ? (
          <Loader>Getting that monthly payment in your sweet spot...</Loader>
        ) : (
          <>
            <LargeText>
              {`${name}, your total monthly payment will be `}
              <strong>{mortgagePayment.monthlyPayment}.</strong>
            </LargeText>
            <Subtitle>Additional Details</Subtitle>
            <DetailItem>
              <DetailLabel>Total payment</DetailLabel>
              <Detail>{mortgagePayment.totalPayment}</Detail>
            </DetailItem>
            <DetailItem>
              <DetailLabel>Total interest paid</DetailLabel>
              <Detail>{mortgagePayment.totalInterest}</Detail>
            </DetailItem>
            <ButtonWrapper>
              <ButtonLink href='/'>Re-calculate my monthly payment</ButtonLink>
            </ButtonWrapper>
          </>
        )}
      </ContentWrapper>
    </Layout>
  );
}

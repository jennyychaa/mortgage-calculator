'use client';

import Image from 'next/image';
import styled from '@emotion/styled';

import HouseImg from '@/assets/house.png';
import { theme } from '@/themes';
import ButtonLink from '@/components/ButtonLink';
import Layout from '@/components/Layout';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${theme.layout.space1000};
`;

const ImageWrapper = styled.div`
  border-radius: 100%;
  background-color: ${theme.colors.blue};
  margin-bottom: ${theme.layout.space500};
  padding: ${theme.layout.space500};
`;

const Heading = styled.h1`
  margin-bottom: ${theme.layout.space300};
  font-size: ${theme.typography.fs200};
  text-align: center;
`;

export default function HomePage() {
  return (
    <Layout>
      <PageWrapper>
        <ImageWrapper>
          <Image
            src={HouseImg}
            alt='Your Possible Dream Home'
            width='150'
            height='150'
          />
        </ImageWrapper>
        <Heading>Calculate Your Mortgage</Heading>
        <ButtonLink href='/questionnaire'>Let&apos;s Get Started</ButtonLink>
      </PageWrapper>
    </Layout>
  );
}

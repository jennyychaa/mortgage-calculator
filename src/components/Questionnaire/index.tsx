'use client';

import { FormEvent, PropsWithChildren, ReactNode, useState } from 'react';
import styled from '@emotion/styled';

import { theme } from '@/themes';
import { Form, FormButtons, FormField, Input, Label } from '@/components/Form';
import { Button, OutlineButton } from '../Button';

export interface QuestionnaireProps {
  questionNumber: string;
  question: ReactNode;
  onPrev: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const ContentWrapper = styled.div`
  padding: ${theme.layout.space300} ${theme.layout.space200};
`;

const QuestionnaireHeader = styled.div`
  display: flex;
  grid-gap: ${theme.layout.space200};
`;

const QuestionNumber = styled.span`
  font-size: ${theme.typography.fs125};
  font-weight: ${theme.typography.fw500};
`;

const Question = styled.p`
  font-size: ${theme.typography.fs112};
  font-weight: ${theme.typography.fw300};
  line-height: 1.2;
`;

function Questionnaire({
  questionNumber,
  question,
  onPrev,
  onSubmit,
  children,
}: PropsWithChildren<QuestionnaireProps>) {
  return (
    <ContentWrapper>
      <QuestionnaireHeader>
        <QuestionNumber>{questionNumber}.</QuestionNumber>
        <Question>{question}</Question>
      </QuestionnaireHeader>
      <Form onSubmit={onSubmit}>
        {children}
        <FormButtons>
          <OutlineButton aria-label='Go to Previous Page' onClick={onPrev}>
            ←
          </OutlineButton>
          <Button type='submit'>Next</Button>
        </FormButtons>
      </Form>
    </ContentWrapper>
  );
}

export default Questionnaire;

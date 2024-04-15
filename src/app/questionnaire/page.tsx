'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useMortgageCalculator } from '@/contexts/useMortgageCalculator';
import {
  FormField,
  Input,
  InputIconWrapper,
  InputWithLeftIcon,
  InputWithRightIcon,
  Label,
  LeftInputIcon,
  Legend,
  RadioCard,
  RadioCardWrapper,
  RightInputIcon,
} from '@/components/Form';
import Layout from '@/components/Layout';
import Questionnaire, { QuestionnaireProps } from '@/components/Questionnaire';
import PageHeader from '@/components/PageHeader';

export default function QuestionnairePage() {
  const [questionNumber, setQuestionNumber] = useState<1 | 2>(1);

  const router = useRouter();
  const {
    data: { name },
    action: { updateName, updateLoan },
  } = useMortgageCalculator();

  const navigateToHome = () => {
    router.push('/');
  };

  const navigateToNextPage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);

    updateName(data.get('name') as string);
    setQuestionNumber(2);
  };

  const navigateToPrevPage = () => {
    setQuestionNumber(1);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.target as HTMLFormElement);
    const amount = parseFloat(data.get('amount') as string);
    const interestRate = parseFloat(data.get('interestRate') as string);
    const term = parseFloat(data.get('term') as string);

    updateLoan(amount, interestRate, term);
    router.push('/result');
  };

  const questions: QuestionnaireProps[] = [
    {
      questionNumber: '01',
      question: (
        <>
          Hi :-)
          <br />
          <br />
          Let&apos;s see how much house is in your budget. What&apos;s your
          name?
        </>
      ),
      onPrev: navigateToHome,
      onSubmit: navigateToNextPage,
    },
    {
      questionNumber: '02',
      question: (
        <>
          Thanks, {name}!
          <br />
          <br />
          Tell us about your budget. We&apos;ll show you what your payments
          might look like.
        </>
      ),
      onPrev: navigateToPrevPage,
      onSubmit,
    },
  ];

  return (
    <Layout>
      <PageHeader />
      {questionNumber === 1 ? (
        <Questionnaire {...questions[0]}>
          <FormField>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' name='name' type='text' required />
          </FormField>
        </Questionnaire>
      ) : (
        <Questionnaire {...questions[1]}>
          <FormField>
            <Label htmlFor='amount'>Home price</Label>
            <InputIconWrapper>
              <LeftInputIcon>$</LeftInputIcon>
              <InputWithLeftIcon
                id='amount'
                name='amount'
                type='number'
                required
              />
            </InputIconWrapper>
          </FormField>
          <FormField>
            <RadioCardWrapper>
              <Legend>Term (years)</Legend>
              <RadioCard>
                <input type='radio' name='term' id='15' value='15' />
                <label htmlFor='15'>15</label>
              </RadioCard>
              <RadioCard>
                <input type='radio' name='term' id='20' value='20' />
                <label htmlFor='20'>20</label>
              </RadioCard>
              <RadioCard>
                <input
                  type='radio'
                  name='term'
                  id='30'
                  value='30'
                  defaultChecked
                />
                <label htmlFor='30'>30</label>
              </RadioCard>
            </RadioCardWrapper>
          </FormField>
          <FormField>
            <Label htmlFor='interestRate'>Interest rate</Label>
            <InputIconWrapper>
              <InputWithRightIcon
                id='interestRate'
                name='interestRate'
                type='number'
                step='0.01'
                required
              />
              <RightInputIcon>%</RightInputIcon>
            </InputIconWrapper>
          </FormField>
        </Questionnaire>
      )}
    </Layout>
  );
}

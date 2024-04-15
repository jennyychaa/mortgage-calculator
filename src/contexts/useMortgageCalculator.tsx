'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface Loan {
  amount: number;
  interestRate: number;
  term: number;
}

interface MortgagePayment {
  monthlyPayment: string;
  totalPayment: string;
  totalInterest: string;
}

interface MortgageCalculatorContextProps {
  data: {
    isCalculating: boolean;
    name: string;
    loan: Loan;
    mortgagePayment: MortgagePayment;
  };
  action: {
    updateName: (name: string) => void;
    updateLoan: (amount: number, interestRate: number, term: number) => void;
    calculateMortgagePayment: () => void;
  };
}

const MortgageCalculatorContext =
  createContext<MortgageCalculatorContextProps | null>(null);

const useMortgageCalculator = () => {
  const mortgageCalculatorContext = useContext(MortgageCalculatorContext);

  if (!mortgageCalculatorContext) {
    throw new Error(
      'Mortgage Calculator Context is null. Did you forget to include MortgageCalculatorProvider in your tree?'
    );
  }

  return mortgageCalculatorContext;
};

const MortgageCalculatorProvider = ({ children }: PropsWithChildren<{}>) => {
  const [name, setName] = useState<string>('');
  const [loan, setLoan] = useState<Loan>({
    amount: 300000,
    interestRate: 6.895,
    term: 30,
  });
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [mortgagePayment, setMortgagePayment] = useState<MortgagePayment>({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
  });

  const updateName = (name: string) => {
    setName(name);
  };

  const updateLoan = (amount: number, interestRate: number, term: number) => {
    setLoan({
      amount,
      interestRate,
      term,
    });
  };

  const calculateMortgagePayment = () => {
    setIsCalculating(true);

    const monthlyInterestRate = loan.interestRate / 100 / 12;
    const monthlyLoanTerm = loan.term * 12;

    const monthlyPaymentAmount =
      (loan.amount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, monthlyLoanTerm));
    const totalPayment = monthlyPaymentAmount * monthlyLoanTerm;

    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    setMortgagePayment({
      monthlyPayment: currencyFormatter.format(monthlyPaymentAmount),
      totalPayment: currencyFormatter.format(totalPayment),
      totalInterest: currencyFormatter.format(totalPayment - loan.amount),
    });

    setIsCalculating(false);
  };

  return (
    <MortgageCalculatorContext.Provider
      value={{
        data: {
          isCalculating,
          name,
          loan,
          mortgagePayment,
        },
        action: {
          updateName,
          updateLoan,
          calculateMortgagePayment,
        },
      }}>
      {children}
    </MortgageCalculatorContext.Provider>
  );
};

export { MortgageCalculatorProvider, useMortgageCalculator };

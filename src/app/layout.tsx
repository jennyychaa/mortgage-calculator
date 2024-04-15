import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/themes/reset.css';
import '@/themes/theme.css';
import { MortgageCalculatorProvider } from '@/contexts/useMortgageCalculator';
import { ThemeProvider } from '@/contexts/useTheme';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Mortgage Calculator',
  description:
    'A simple app that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <ThemeProvider>
          <MortgageCalculatorProvider>{children}</MortgageCalculatorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

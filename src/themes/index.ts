import { ThemeProvider, useTheme } from '../contexts/useTheme';

export const theme = {
  colors: {
    white: 'var(--color-white)',
    black: 'var(--color-black)',
    lightGray: 'var(--color-gray-light)',
    gray: 'var(--color-gray)',
    darkGray: 'var(--color-gray-dark)',
    blue: 'var(--color-blue)',
    lightPurple: 'var(--color-purple-light)',
    purple: 'var(--color-purple)',
    darkPurple: 'var(--color-purple-dark)',
  },
  breakpoints: {
    mobile_small: '375px',
    mobile_medium: '515px',
    mobile_large: '650px',
    tablet_small: '768px',
    tablet_medium: '900px',
    tablet_large: '1024px',
    desktop_small: '1280px',
    desktop_large: '1440px',
  },
  layout: {
    contentWrapperMaxWidth: 'var(--content-wrapper-max-width)',
    space50: 'var(--gutter-50)',
    space100: 'var(--gutter-100)',
    space150: 'var(--gutter-150)',
    space200: 'var(--gutter-200)',
    space300: 'var(--gutter-300)',
    space400: 'var(--gutter-400)',
    space500: 'var(--gutter-500)',
    space600: 'var(--gutter-600)',
    space700: 'var(--gutter-700)',
    space800: 'var(--gutter-800)',
    space900: 'var(--gutter-900)',
    space1000: 'var(--gutter-1000)',
    space1100: 'var(--gutter-1100)',
    space1200: 'var(--gutter-1200)',
    space1300: 'var(--gutter-1300)',
    space1400: 'var(--gutter-1400)',
    space1500: 'var(--gutter-1500)',
    space1600: 'var(--gutter-1600)',
    space1700: 'var(--gutter-1700)',
    space1800: 'var(--gutter-1800)',
    space1900: 'var(--gutter-1900)',
    space2000: 'var(--gutter-2000)',
  },
  typography: {
    fs75: 'var(--font-size-75)',
    fs87: 'var(--font-size-87)',
    fs100: 'var(--font-size-100)',
    fs112: 'var(--font-size-112)',
    fs125: 'var(--font-size-125)',
    fs150: 'var(--font-size-150)',
    fs175: 'var(--font-size-175)',
    fs200: 'var(--font-size-200)',
    fs225: 'var(--font-size-225)',
    fs300: 'var(--font-size-300)',
    fs350: 'var(--font-size-350)',
    fs400: 'var(--font-size-400)',
    fs500: 'var(--font-size-500)',
    fw100: 'var(--font-weight-100)',
    fw300: 'var(--font-weight-300)',
    fw400: 'var(--font-weight-400)',
    fw500: 'var(--font-weight-500)',
    fw700: 'var(--font-weight-700)',
  },
};

export type Theme = typeof theme;

export { ThemeProvider, useTheme };

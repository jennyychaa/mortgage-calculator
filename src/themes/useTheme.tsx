'use client';

import { createContext, PropsWithChildren, useContext } from 'react';

const CustomThemeContext = createContext<{}>({});

const useTheme = () => useContext(CustomThemeContext);

const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <CustomThemeContext.Provider value={{}}>
      {children}
    </CustomThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };

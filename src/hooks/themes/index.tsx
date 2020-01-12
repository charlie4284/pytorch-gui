import React, { createContext, useContext, ReactNode } from 'react';

export type ColorThemeType = {
  primary: string;
  secondary: string;
  tertiary: string;
  quarternary?: string;
  quinary?: string;
  text?: string;
  background?: string;
};

type ThemeProvier = {
  children: ReactNode;
  colors?: ColorThemeType;
};

const defaultColors = {
  primary: '#de3828',
  secondary: '#001',
  tertiary: '#002',
  quarternary: '#003',
  quinary: '#004',
  text: '#ddd',
  background: '#eee',
} as ColorThemeType;

export const ThemeContext = createContext(defaultColors);

export const ThemeProvider = ({ children, colors = defaultColors }: ThemeProvier) => {
  return <ThemeContext.Provider value={colors}>{children}</ThemeContext.Provider>;
};

function useTheme(): ColorThemeType {
  const colors = useContext(ThemeContext);
  return colors;
}

export default useTheme;

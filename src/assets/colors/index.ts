import { ColorThemeType } from '../../hooks/themes';

export const PytorchColors = {
  primary: '#de3828',
  secondary: '#bf2f48',
  tertiary: '#9d256a',
  quarternary: '#f15733',
  quinary: '#9f52a0',
  text: '#000',
  background: '#eee',
} as ColorThemeType;

export function createGradient(start: string, end: string): string {
  return `linear-gradient(to right, ${start} , ${end})`;
}

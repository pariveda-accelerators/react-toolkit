export * from './color-theory';
export * from './sass-palette';
export * from './understanding-hex';
export * from './creating-color';
export * from './color-and-brand';
export * from './brand-demo';
export * from './colors';

export const colors = [
  'white',
  'black',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'seafoam',
  'cyan',
  'azure',
  'blue',
  'violet',
  'magenta',
  'rose',
];
export const shades = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

export type TCcolorName = typeof colors[number];
export type TShade = typeof shades[number];

export interface IColor {
  color: TColor;
  shade: TShade;
}

export type TColor = TCcolorName | IColor;

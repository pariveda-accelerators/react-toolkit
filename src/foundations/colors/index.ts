export * from './colors';

export const colors = [
  'white',
  'black',
  'grey',
  'rose',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'seafoam',
  'teal',
  'azure',
  'blue',
  'violet',
  'magenta',
];
export const shades = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'];

export type TColorName = typeof colors[number];
export type TShade = typeof shades[number];

export interface IColor {
  color: TColor;
  shade: TShade;
}

export type TColor = TColorName | IColor;

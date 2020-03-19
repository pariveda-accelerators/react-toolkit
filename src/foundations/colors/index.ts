export const COLORS = [
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
export const SHADES = ['10', '20', '30', '40', '50', '60', '70', '80', '90'];

export type TColor = typeof COLORS[number];
export type TShade = typeof SHADES[number];

export interface IColor {
  color: TColor;
  shade: TShade;
}

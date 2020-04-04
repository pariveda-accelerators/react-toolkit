import { isString, isNullOrUndefined } from 'utils/type-guards';

export const COLOR = [
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
] as const;
export type TColor = typeof COLOR[number];

export const SHADE = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
export type TShade = typeof SHADE[number];

export interface IColorObject {
  color: TColor;
  shade?: TShade;
}

export const isColor = (value: any): value is TColor => COLOR.includes(value);
export const isShade = (value: any): value is TShade => SHADE.includes(value);
export const isColorObject = (value: any): value is IColorObject => {
  if (!isNullOrUndefined(value)) {
    const keys = Object.keys(value);
    // Only checking `color` because `shade` is not required
    return keys.includes('color');
  }
  return false;
};

export const colorIsInPalette = (value: any): boolean => {
  if (isString(value)) {
    const color = value.split('-')[0];
    return isColor(color);
  }
  return false;
};

export const getPaletteColor = (obj?: IColorObject) => {
  if (isColorObject(obj)) {
    const { color, shade = '5' } = obj;
    const isWhiteOrBlack = ['white', 'black'].includes(color);
    const colorString = isWhiteOrBlack ? color : `${color}-${shade}`;
    return colorIsInPalette(colorString) ? colorString : '';
  }
  return '';
};

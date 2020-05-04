import { isNullOrUndefined, isString } from '../../utilities';

export const SHADELESS_COLOR = ['white', 'black', 'transparent'] as const;
export type TShadlessColor = typeof SHADELESS_COLOR[number];

export const COLOR = [
  'transparent',
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

export const COLOR_SHADE = [
  'transparent',
  'white',
  'black',
  'grey-1',
  'grey-2',
  'grey-3',
  'grey-4',
  'grey-5',
  'grey-6',
  'grey-7',
  'grey-8',
  'grey-9',
  'rose-1',
  'rose-2',
  'rose-3',
  'rose-4',
  'rose-5',
  'rose-6',
  'rose-7',
  'rose-8',
  'rose-9',
  'red-1',
  'red-2',
  'red-3',
  'red-4',
  'red-5',
  'red-6',
  'red-7',
  'red-8',
  'red-9',
  'orange-1',
  'orange-2',
  'orange-3',
  'orange-4',
  'orange-5',
  'orange-6',
  'orange-7',
  'orange-8',
  'orange-9',
  'yellow-1',
  'yellow-2',
  'yellow-3',
  'yellow-4',
  'yellow-5',
  'yellow-6',
  'yellow-7',
  'yellow-8',
  'yellow-9',
  'lime-1',
  'lime-2',
  'lime-3',
  'lime-4',
  'lime-5',
  'lime-6',
  'lime-7',
  'lime-8',
  'lime-9',
  'green-1',
  'green-2',
  'green-3',
  'green-4',
  'green-5',
  'green-6',
  'green-7',
  'green-8',
  'green-9',
  'seafoam-1',
  'seafoam-2',
  'seafoam-3',
  'seafoam-4',
  'seafoam-5',
  'seafoam-6',
  'seafoam-7',
  'seafoam-8',
  'seafoam-9',
  'teal-1',
  'teal-2',
  'teal-3',
  'teal-4',
  'teal-5',
  'teal-6',
  'teal-7',
  'teal-8',
  'teal-9',
  'azure-1',
  'azure-2',
  'azure-3',
  'azure-4',
  'azure-5',
  'azure-6',
  'azure-7',
  'azure-8',
  'azure-9',
  'blue-1',
  'blue-2',
  'blue-3',
  'blue-4',
  'blue-5',
  'blue-6',
  'blue-7',
  'blue-8',
  'blue-9',
  'violet-1',
  'violet-2',
  'violet-3',
  'violet-4',
  'violet-5',
  'violet-6',
  'violet-7',
  'violet-8',
  'violet-9',
  'magenta-1',
  'magenta-2',
  'magenta-3',
  'magenta-4',
  'magenta-5',
  'magenta-6',
  'magenta-7',
  'magenta-8',
  'magenta-9',
] as const;
export type TColorShade = typeof COLOR_SHADE[number];

export interface IColorObject {
  color: TColor;
  shade?: TShade;
}

export const isShadelessColor = (value: any): value is TShadlessColor =>
  SHADELESS_COLOR.includes(value);
export const isColor = (value: any): value is TColor => COLOR.includes(value);
export const isShade = (value: any): value is TShade => SHADE.includes(value);
export const isColorObject = (value: any): value is IColorObject => {
  if (!isNullOrUndefined(value)) {
    const keys = Object.keys(value);
    // Only checking `color` because `shade` is not required
    return keys.includes('color') && isColor(value.color);
  }
  return false;
};

export const colorIsInPalette = (value: any): boolean => {
  if (isString(value)) {
    const [color, shade] = value.split('-');
    if (isShadelessColor(color)) {
      return true;
    }
    return isColor(color) && isShade(shade);
  }
  return false;
};

export const getPaletteColor = (obj?: IColorObject) => {
  if (isColorObject(obj)) {
    const { color, shade = '5' } = obj;
    const isShadeless = isShadelessColor(color);
    return isShadeless ? color : `${color}-${shade}`;
  }
  return '';
};

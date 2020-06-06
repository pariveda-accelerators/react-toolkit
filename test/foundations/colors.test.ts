import {
  SHADELESS_COLOR,
  COLOR,
  SHADE,
  COLOR_SHADE,
  isShadelessColor,
  isColor,
  isShade,
  isColorObject,
  colorIsInPalette,
  getPaletteColor,
} from '../../src/foundations';

describe('Colors', () => {
  it('Shadeless Color List is default', () => {
    const defaultShadeless = ['white', 'black', 'transparent'];
    expect(SHADELESS_COLOR).toEqual(defaultShadeless);
  });
  it('Color List is default', () => {
    const defaultColor = [
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
    ];
    expect(COLOR).toEqual(defaultColor);
  });
  it('Shade List is default', () => {
    const defaultShade = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    expect(SHADE).toEqual(defaultShade);
  });
  it('Color + Shade List is default', () => {
    const defaultColorShade = [
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
    ];
    expect(COLOR_SHADE).toEqual(defaultColorShade);
  });
  it('isShadelessColor', () => {
    SHADELESS_COLOR.forEach(color => expect(isShadelessColor(color)).toBe(true));
    expect(isShadelessColor('brown')).toBe(false);
    expect(isShadelessColor('red-5')).toBe(false);
  });
  it('isColor', () => {
    COLOR.forEach(color => expect(isColor(color)).toBe(true));
    expect(isColor('brown')).toBe(false);
    expect(isColor('red-5')).toBe(false);
  });
  it('isShade', () => {
    SHADE.forEach(color => expect(isShade(color)).toBe(true));
    expect(isShade('0')).toBe(false);
    expect(isShade('10')).toBe(false);
  });
  it('isColorObject', () => {
    COLOR_SHADE.forEach(colorShade => {
      const [color, shade] = colorShade.split('-');
      const colorObj = {
        color,
        shade,
      };
      expect(isColorObject(colorObj)).toBe(true);
    });
    expect(isColorObject(null)).toBe(false);
    expect(isColorObject({ shade: '3' })).toBe(false);
    expect(isColorObject({ color: 'brown' })).toBe(false);
  });
  it('colorIsInPalette', () => {
    COLOR_SHADE.forEach(colorShade => {
      expect(colorIsInPalette(colorShade)).toBe(true);
    });
    expect(colorIsInPalette(null)).toBe(false);
    expect(colorIsInPalette('red')).toBe(false);
    expect(colorIsInPalette('red-0')).toBe(false);
    expect(colorIsInPalette('brown-3')).toBe(false);
  });
  it('getPaletteColor', () => {
    const red5 = { color: 'red' } as any;
    const red7 = { color: 'red', shade: '7' } as any;
    const white = { color: 'white' } as any;
    const black = { color: 'black' } as any;
    const brown5 = { color: 'brown' } as any;
    expect(getPaletteColor(red5)).toBe('red-5');
    expect(getPaletteColor(red7)).toBe('red-7');
    expect(getPaletteColor(white)).toBe('white');
    expect(getPaletteColor(black)).toBe('black');
    expect(getPaletteColor(brown5)).toBe('');
  });
});

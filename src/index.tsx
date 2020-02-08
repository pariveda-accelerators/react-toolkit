import * as React from 'react';
import styled from 'styled-components';

interface IColorSwatch {
  color: string;
}

const ColorSwatch = styled.div<IColorSwatch>`
  height: 64px;
  width: 64px;
  border-radius: 4px;
  background-color: ${props => props.color};
`;

interface IFlex {
  row?: boolean;
  column?: boolean;
  padding?: number;
}
const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  padding: ${props => props.padding || '8px'};
  align-items: center;
  font-family: sans-serif;
`;

// const TextField = styled.input`
//   border-radius: 4px;
//   border: 1px solid #666;
//   padding: 0.5em;
// `;

const SCALE = 16;
const MULTIPLIER = 1.5;
const SHADE_COUNT = 3;
const COLOR_RANGE = 255 - SCALE * MULTIPLIER * SHADE_COUNT;
const HALF_RANGE = Math.floor(COLOR_RANGE / 2);
const MAX_VALUE = 128 + HALF_RANGE;
const MIN_VALUE = 128 - HALF_RANGE;
let SHADES = [] as number[];
for (let i = -1 * SHADE_COUNT; i <= SHADE_COUNT; i++) {
  SHADES.push(SCALE * MULTIPLIER * i);
}

const getHexFromDecimal = (decimal: number) => {
  const hex = decimal.toString(16);
  if (decimal < 0) {
    return `00`;
  } else if (decimal < 16) {
    return `0${hex}`;
  }
  return hex;
};

const getShadesForColor = (hex: string) => {
  if (hex.length === 1) {
    return SHADES.map(shade => {
      const decimal = parseInt(`${hex}${hex}`, 16) + shade;
      return getHexFromDecimal(decimal);
    });
  } else if (hex.length === 2) {
    return SHADES.map(shade => {
      const decimal = parseInt(hex, 16) + shade;
      return getHexFromDecimal(decimal);
    });
  }
  return [];
};

interface IChannelLock {
  r?: boolean;
  g?: boolean;
  b?: boolean;
}

const generateColorPaletteShades = (colors: IColorDef[]) =>
  colors.map(color => {
    const { hex, lock } = color;
    const isShort = hex.length === 4;
    const regex = isShort ? /.{1}/g : /.{1,2}/g;
    const [red, green, blue] = hex.slice(1).match(regex) as any;
    const redShades = lock?.r ? [] : getShadesForColor(red);
    const greenShades = lock?.g ? [] : getShadesForColor(green);
    const blueShades = lock?.b ? [] : getShadesForColor(blue);

    let colorShades = [];
    const totalShades = Math.max(
      redShades.length,
      greenShades.length,
      blueShades.length
    );
    for (let i = 0; i < totalShades; i++) {
      const r = redShades.length === 0 ? red : redShades[i];
      const g = greenShades.length === 0 ? green : greenShades[i];
      const b = blueShades.length === 0 ? blue : blueShades[i];

      colorShades.push(`#${r}${g}${b}`);
    }
    return colorShades;
  });

interface IColorDef {
  hex: string;
  lock?: IChannelLock;
}

interface IRGB {
  r: number;
  g: number;
  b: number;
}
const getColorPaletteFromRgb = (rgb: IRGB) => {
  const { r, g, b } = rgb;
  const rHex = getHexFromDecimal(r);
  const gHex = getHexFromDecimal(g);
  const bHex = getHexFromDecimal(b);
  return [
    {
      hex: `#${rHex}${gHex}${bHex}`,
      lock: { r: false },
    },
    {
      hex: `#${gHex}${bHex}${rHex}`,
      lock: { g: false },
    },
    {
      hex: `#${bHex}${rHex}${gHex}`,
      lock: { b: false },
    },
  ];
};

export const ColorPalette = () => {
  const [rgb, setRgb] = React.useState({
    r: 180,
    g: 64,
    b: 128,
  });
  const handleChange = (channel: 'r' | 'g' | 'b') => (
    onChange: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = onChange.target;
    setRgb({
      ...rgb,
      [channel]: Number(value),
    });
  };
  const palette = getColorPaletteFromRgb(rgb);
  const [colors, setColors] = React.useState(palette);
  React.useEffect(() => {
    setColors(palette);
  }, [rgb.r, rgb.g, rgb.b]);
  const shades = generateColorPaletteShades(
    [
      {
        hex: '#666',
      },
    ].concat(colors)
  );
  return (
    <Flex column>
      <Flex>
        <h2>Red</h2>
        <Flex />
        <p>{rgb.r}</p>
        <Flex />
        <p>{getHexFromDecimal(rgb.r)}</p>
        <Flex />
        <input
          type="range"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={rgb.r}
          className="slider"
          id="red"
          onChange={handleChange('r')}
        />
      </Flex>
      <Flex>
        <h2>Green</h2>
        <Flex />
        <p>{rgb.g}</p>
        <Flex />
        <p>{getHexFromDecimal(rgb.g)}</p>
        <Flex />
        <input
          type="range"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={rgb.g}
          className="slider"
          id="red"
          onChange={handleChange('g')}
        />
      </Flex>
      <Flex>
        <h2>Blue</h2>
        <Flex />
        <p>{rgb.b}</p>
        <Flex />
        <p>{getHexFromDecimal(rgb.b)}</p>
        <Flex />
        <input
          type="range"
          min={MIN_VALUE}
          max={MAX_VALUE}
          value={rgb.b}
          className="slider"
          id="red"
          onChange={handleChange('b')}
        />
      </Flex>
      {shades.map((colorShades, colorIdx) => (
        <Flex key={colorIdx}>
          {colorShades?.map((shade, shadeIdx) => (
            <React.Fragment key={shadeIdx}>
              <ColorSwatch color={shade} />
              <Flex />
            </React.Fragment>
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

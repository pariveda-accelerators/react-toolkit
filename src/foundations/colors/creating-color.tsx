import * as React from 'react';
import { Flex, ColorSlice, Heading, ColorSwatch } from './components';

const SHADE_COUNT = 3;
const INTERVAL = Math.floor(255 / SHADE_COUNT);
let SHADES = [] as number[];
for (let i = -1 * SHADE_COUNT; i <= SHADE_COUNT; i++) {
  SHADES.push(INTERVAL * i);
}

console.log('SHADES: ', SHADES);

const getHexFromDecimal = (decimal: number) => {
  const hex = decimal.toString(16);
  if (decimal < 0) {
    return `00`;
  } else if (decimal < 16) {
    return `0${hex}`;
  } else if (decimal > 255) {
    return 'ff';
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
    },
    {
      hex: `#${bHex}${rHex}${gHex}`,
    },
    {
      hex: `#${gHex}${bHex}${rHex}`,
    },
    {
      hex: `#${rHex}${rHex}${bHex}`,
    },
    {
      hex: `#${rHex}${gHex}${rHex}`,
    },
    {
      hex: `#${gHex}${rHex}${rHex}`,
    },
  ];
};

export const MixingRGB = () => {
  const [rgb, setRgb] = React.useState({
    r: 255,
    g: 0,
    b: 0,
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
  const colorShades = generateColorPaletteShades(colors);

  console.log('colorShades: ', colorShades);
  return (
    <Flex column>
      <Heading>Custom Palette</Heading>
      <Flex center>
        <h2>Red</h2>
        <Flex />
        <p>{rgb.r}</p>
        <Flex />
        <p>{getHexFromDecimal(rgb.r)}</p>
        <Flex />
        <input
          type="range"
          min={0}
          max={255}
          value={rgb.r}
          className="slider"
          id="red"
          onChange={handleChange('r')}
        />
        <ColorSwatch color={`#${getHexFromDecimal(rgb.r)}0000`} />
      </Flex>
      <Flex center>
        <h2>Green</h2>
        <Flex />
        <p>{rgb.g}</p>
        <Flex />
        <p>{getHexFromDecimal(rgb.g)}</p>
        <Flex />
        <input
          type="range"
          min={0}
          max={255}
          value={rgb.g}
          className="slider"
          id="green"
          onChange={handleChange('g')}
        />
        <ColorSwatch color={`#00${getHexFromDecimal(rgb.g)}00`} />
      </Flex>
      <Flex center>
        <h2>Blue</h2>
        <Flex />
        <p>{rgb.b}</p>
        <Flex />
        <p>{getHexFromDecimal(rgb.b)}</p>
        <Flex />
        <input
          type="range"
          min={0}
          max={255}
          value={rgb.b}
          className="slider"
          id="blue"
          onChange={handleChange('b')}
        />
        <ColorSwatch color={`#0000${getHexFromDecimal(rgb.b)}`} />
      </Flex>
      <ColorSlice
        color={`#${getHexFromDecimal(rgb.r)}${getHexFromDecimal(
          rgb.g
        )}${getHexFromDecimal(rgb.b)}`}
      />
      <Heading>Shades Custom Palette</Heading>
      {colorShades.map((color, colorIndex) => (
        <Flex stretch padding={4} key={colorIndex}>
          {color.map((shade, shadeIndex) => (
            <ColorSlice
              key={`${shade}-${colorIndex}-${shadeIndex}`}
              color={shade}
              height={64}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
};

import * as React from 'react';
import { Flex, Heading, ColorSlice, Button } from './components';

export const ColorAndBrand = () => {
  const TETRAD_SHIFT = 1;

  const MAX_COLOR = 12;
  const MAX_SHADE = 7;
  const [color, setColor] = React.useState(1);
  const [shade, setShade] = React.useState(4);

  const updateColor = (change: number) => {
    const nextColor = color + change;
    if (nextColor > MAX_COLOR) {
      setColor(1);
    } else if (nextColor < 1) {
      setColor(MAX_COLOR);
    } else {
      setColor(nextColor);
    }
  };
  const updateShade = (change: number) => {
    const nextShade = shade + change;
    if (nextShade > MAX_SHADE) {
      setShade(1);
    } else if (nextShade < 1) {
      setShade(MAX_SHADE);
    } else {
      setShade(nextShade);
    }
  };

  const getColorWithOffset = (color: number, offset: number) => {
    const newColor = color + offset;
    if (newColor > MAX_COLOR) {
      return newColor - MAX_COLOR;
    } else if (newColor < 1) {
      return newColor + MAX_COLOR;
    }
    return newColor;
  };
  return (
    <Flex column center>
      <Flex stretch>
        <ColorSlice color={`color-${color}-4`} height={64}>
          <Heading color="white">Color</Heading>
        </ColorSlice>
        <Flex shrink />
        <Button onClick={() => updateColor(-1)}>Previous</Button>
        <Button onClick={() => updateColor(1)}>Next</Button>
      </Flex>
      <Flex stretch>
        <ColorSlice color={`color-${color}-${shade}`} height={64}>
          <Heading>Shade</Heading>
        </ColorSlice>
        <Flex shrink />
        <Button onClick={() => updateShade(-1)}>Darker</Button>
        <Button onClick={() => updateShade(1)}>Lighter</Button>
      </Flex>
      <Heading bold>Complimentary Colors</Heading>
      <Flex stretch>
        <ColorSlice color={`color-${color}-${shade}`} height={64} />
        <ColorSlice
          color={`color-${getColorWithOffset(color, MAX_COLOR / 2)}-${shade}`}
          height={64}
        />
      </Flex>
      <Heading bold>Analogous Colors</Heading>
      <Flex stretch>
        <ColorSlice
          color={`color-${getColorWithOffset(color, -1)}-${shade}`}
          height={64}
        />
        <ColorSlice color={`color-${color}-${shade}`} height={64} />
        <ColorSlice
          color={`color-${getColorWithOffset(color, 1)}-${shade}`}
          height={64}
        />
      </Flex>
      <Heading bold>Triadic Colors</Heading>
      <Flex stretch>
        <ColorSlice color={`color-${color}-${shade}`} height={64} />
        <ColorSlice
          color={`color-${getColorWithOffset(color, MAX_COLOR / 3)}-${shade}`}
          height={64}
        />
        <ColorSlice
          color={`color-${getColorWithOffset(color, (MAX_COLOR * 2) / 3)}-${shade}`}
          height={64}
        />
      </Flex>
      <Heading bold>Split Complementary Colors</Heading>
      <Flex stretch>
        <ColorSlice color={`color-${color}-${shade}`} height={64} />
        <ColorSlice
          color={`color-${getColorWithOffset(color, MAX_COLOR / 2 + 1)}-${shade}`}
          height={64}
        />
        <ColorSlice
          color={`color-${getColorWithOffset(color, MAX_COLOR / 2 - 1)}-${shade}`}
          height={64}
        />
      </Flex>
      <Heading bold>Tetradic Colors</Heading>
      <Flex stretch>
        <ColorSlice color={`color-${color}-${shade}`} height={64} />
        <ColorSlice
          color={`color-${getColorWithOffset(color, MAX_COLOR / 2)}-${shade}`}
          height={64}
        />
        <ColorSlice
          color={`color-${getColorWithOffset(color, TETRAD_SHIFT)}-${shade}`}
          height={64}
        />
        <ColorSlice
          color={`color-${getColorWithOffset(
            color,
            TETRAD_SHIFT + MAX_COLOR / 2
          )}-${shade}`}
          height={64}
        />
      </Flex>
    </Flex>
  );
};

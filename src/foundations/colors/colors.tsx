import * as React from 'react';
import { Flex, Heading, ColorSlice, Body, Subheading, Button } from './components';

export const Colors = () => {
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
  const primaryColor = `color-${color}-${shade}`;
  const secondaryColor = `color-${getColorWithOffset(
    color,
    MAX_COLOR / 2 + 1
  )}-${shade}`;
  const tertiaryColor = `color-${getColorWithOffset(
    color,
    MAX_COLOR / 2 - 1
  )}-${shade - 3}`;
  return (
    <Flex column center>
      <Flex stretch>
        <ColorSlice color={primaryColor} height={64}>
          <Heading color="white">Primary</Heading>
        </ColorSlice>
        <ColorSlice color={secondaryColor} height={64}>
          <Heading color="white">Secondary</Heading>
        </ColorSlice>
        <ColorSlice color={tertiaryColor} height={64}>
          <Heading color="white">Tertiary</Heading>
        </ColorSlice>
        <Flex shrink />
        <Button onClick={() => updateColor(-1)}>Previous</Button>
        <Button onClick={() => updateColor(1)}>Next</Button>
      </Flex>
      <Flex stretch>
        <ColorSlice color={primaryColor} height={64}>
          <Heading>Shade</Heading>
        </ColorSlice>
        <Flex shrink />
        <Button onClick={() => updateShade(-1)}>Darker</Button>
        <Button onClick={() => updateShade(1)}>Lighterd</Button>
      </Flex>
      <Flex column stretch color="black">
        <Flex column color="grey-7" stretch padding={0}>
          <Flex color={primaryColor}>
            <Heading bold color="white">
              Header
            </Heading>
          </Flex>
          <Flex>
            <Flex column>
              <Flex color="white">
                <Heading>Review Order Details</Heading>
              </Flex>
              <Flex padding={4} shrink />
              <Flex column color="white">
                <Flex stretch padding={0}>
                  <Subheading condensed>Shipping Address</Subheading>
                  <Flex />
                  <Body bold color={secondaryColor}>
                    Edit
                  </Body>
                </Flex>
                <Body condensed bold>
                  Beaker Muppet
                </Body>
                <Body condensed>1234 Sesame Street</Body>
                <Body condensed>Philly, PA</Body>
              </Flex>
              <Flex padding={4} shrink />
              <Flex column color="white">
                <Subheading condensed>Delivery Options</Subheading>
                <Flex padding={0}>
                  <Flex color="black" center shrink padding={1}>
                    <Flex color={secondaryColor} center shrink padding={7} />
                  </Flex>
                  <Flex shrink />
                  <Body>Pronto</Body>
                </Flex>
                <Flex padding={0}>
                  <Flex color="black" center shrink padding={1}>
                    <Flex color="white" center shrink padding={7} />
                  </Flex>
                  <Flex shrink />
                  <Body>Later</Body>
                </Flex>
              </Flex>
              <Flex padding={4} shrink />
              <Flex column color="white">
                <Flex stretch padding={0}>
                  <Subheading condensed>Billing Details</Subheading>
                  <Flex />
                  <Body bold color={secondaryColor}>
                    Edit
                  </Body>
                </Flex>
                <Body condensed bold>
                  Beaker Muppet
                </Body>
                <Body condensed>1234 1234 1234 1234</Body>
                <Body condensed>Exp: whenever</Body>
                <Body condensed>1234 Sesame Street</Body>
                <Body condensed>Philly, PA</Body>
              </Flex>
              <Flex padding={4} shrink />
            </Flex>
            <Flex column>
              <Flex column color="white" shrink>
                <Subheading condensed>Promo Code</Subheading>
                <Flex>
                  <Flex color="black" padding={2}>
                    <Flex color="white" padding={16} />
                  </Flex>
                  <Button color={secondaryColor}>Apply</Button>
                </Flex>
              </Flex>
              <Flex shrink />
              <Flex column color="white" shrink>
                <Subheading condensed>Order Summary</Subheading>
                <Flex padding={0} shrink>
                  <Body condensed>Shipping</Body>
                  <Flex />
                  <Body condensed>Free</Body>
                </Flex>
                <Flex padding={0} shrink>
                  <Body condensed>Items</Body>
                  <Flex />
                  <Body condensed>3</Body>
                </Flex>
                <Flex padding={0} shrink>
                  <Body condensed>Promo</Body>
                  <Flex />
                  <Body condensed>Nada</Body>
                </Flex>
                <Flex padding={0} shrink>
                  <Body condensed bold>
                    Total
                  </Body>
                  <Flex />
                  <Body condensed bold>
                    $$$
                  </Body>
                </Flex>
                <Flex>
                  <Flex />
                  <Button secondary color={tertiaryColor}>
                    Cancel
                  </Button>
                  <Flex shrink />
                  <Button color={secondaryColor}>Order</Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex color={primaryColor}>
            <Subheading color="white">Footer</Subheading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

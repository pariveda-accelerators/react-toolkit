import React, { FC } from 'react';
import styled from 'styled-components';

const parseColorProp = (color?: string) => {
  if (color === null || typeof color === 'undefined') {
    return 'inherit';
  }
  return color.includes('#') ? color : `var(--${color})`;
};

const getFlexStyles = (props: IFlex) => {
  const { stretch, shrink, start, end, center, equal } = props;
  if (stretch) {
    return `
      flex: 1 0 auto;
      align-self: stretch;
    `;
  } else if (shrink) {
    return `
      flex: 0 1 auto;
      align-self: ${center ? 'center' : 'stretch'};
    `;
  } else if (start) {
    return `
      align-items: flex-start;
      align-self: start;
    `;
  } else if (end) {
    return `
      align-items: flex-start;
      align-self: end;
    `;
  } else if (center) {
    return `
    align-items: center;
    align-self: center;
  `;
  } else if (equal) {
    return 'flex: 1 1 0';
  }
  return 'flex: 1 1 auto';
};

const average = (nums: number[]) =>
  nums.reduce((sum, num) => (sum += num), 0) / nums.length;

const getAccessibleFontColor = (color?: string) => {
  if (color !== null && typeof color !== 'undefined') {
    if (color.includes('#')) {
      const regex = /.{1,2}/g;
      const [red, green, blue] = color.slice(1).match(regex) as any;
      const r = parseInt(red, 16);
      const g = parseInt(green, 16);
      const b = parseInt(blue, 16);

      if (average([r, g, b]) <= 77) {
        return 'var(--white)';
      }
      return 'var(--black)';
    }
  }
  return 'inherit';
};

interface IFlex {
  row?: boolean;
  column?: boolean;
  height?: number;
  padding?: number;
  radius?: number;
  saturation?: number;
  // flex property modifiers
  stretch?: boolean;
  shrink?: boolean;
  start?: boolean;
  center?: boolean;
  end?: boolean;
  equal?: boolean;
}
export const Flex = styled.div.attrs(props => ({
  style: {
    backgroundColor: props.color ? parseColorProp(props.color) : 'transparent',
  },
}))<IFlex>`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  ${props => getFlexStyles(props)};
  padding: ${props =>
    props.padding || typeof props.padding === 'number'
      ? `${props.padding}px`
      : '8px'};
  font-family: sans-serif;
  border-radius: ${props => (props.radius ? `${props.radius}px` : '0px')};
  height: ${props => (props.height ? `${props.height}px` : 'auto')};
  color: ${props => getAccessibleFontColor(props.color)};
  filter: saturate(
    ${props =>
      props.saturation || typeof props.saturation === 'number'
        ? props.saturation
        : 1}
  );
`;

interface IColorSwatch {
  color: string;
}

export const ColorSwatch = styled.div<IColorSwatch>`
  height: 64px;
  width: 64px;
  border-radius: 4px;
  background-color: ${props => parseColorProp(props.color)};
`;

interface IColorSlice {
  color: string;
  percent?: number;
  saturation?: number;
  height?: number;
  children?: React.ReactNode;
}
export const ColorSlice: FC<IColorSlice> = ({
  color,
  percent,
  saturation,
  height,
  children,
}) => (
  <Flex column color={color} height={height || 256} equal saturation={saturation}>
    {(percent || typeof percent === 'number') && <Body bold>{percent}%</Body>}
    {color.includes('#') && <Body>{color.toUpperCase()}</Body>}
    {children}
  </Flex>
);

interface IColorCard {
  color: string;
}

export const ColorCard: FC<IColorCard> = ({ color }) => (
  <Flex column>
    <ColorSwatch color={color} />
    {color.includes('#') && <Body>{color}</Body>}
  </Flex>
);

export const cssNames = [
  'grey',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
];

interface IFont {
  color?: string;
  bold?: boolean;
  condensed?: boolean;
}
export const Heading = styled.h2<IFont>`
  font-family: sans-serif;
  font-size: 2em;
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  margin: ${props => (props.condensed ? '.25em 0' : '1em 0')};
  color: ${props => parseColorProp(props.color)};
`;
export const Subheading = styled.h3<IFont>`
  font-family: sans-serif;
  font-size: 1.5em;
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  margin: ${props => (props.condensed ? '.25em 0' : '1em 0')};
  color: ${props => parseColorProp(props.color)};
`;
export const Body = styled.p<IFont>`
  font-family: sans-serif;
  font-weight: ${props => (props.bold ? 'bold' : 'inherit')};
  margin: ${props => (props.condensed ? '.25em 0' : '1em 0')};
  color: ${props => parseColorProp(props.color)};
`;
export const Bold = styled.b``;

export const List = styled.ul`
  margin-top: 0.5em;
`;

export const ListItem = styled.li`
  margin: 0.25em 0;
  font-size: 1.25em;
`;

const getButtonColors = (props: IButton) => {
  if (props.secondary) {
    return `
      border: 1px solid ${parseColorProp(props.color)};
      background-color: var(--white);
    `;
  }
  return `
    border: 1px solid ${parseColorProp(props.color)};
    background-color: ${parseColorProp(props.color)};
  `;
};

interface IButton {
  secondary?: boolean;
  color?: string;
}
export const Button = styled.button<IButton>`
  ${props => getButtonColors(props)}
  padding: 1em 2em;
  font-weight: bold;
  font-size: 1em;
`;

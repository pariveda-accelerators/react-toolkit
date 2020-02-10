import * as React from 'react';
import styled from 'styled-components';

interface IColorSwatch {
  color: string;
}

const ColorSwatch = styled.div<IColorSwatch>`
  height: 64px;
  width: 64px;
  border-radius: 4px;
  background-color: var(${props => `--${props.color}`});
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

const cssNames = ['grey', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];

export const ColorPalette = () => {
  return (
    <Flex column>
      {cssNames.map((color, colorIdx) => (
        <Flex key={colorIdx}>
          <ColorSwatch color={`${color}-1`} />
          <Flex />
          <ColorSwatch color={`${color}-2`} />
          <Flex />
          <ColorSwatch color={`${color}-3`} />
          <Flex />
          <ColorSwatch color={`${color}-4`} />
          <Flex />
          <ColorSwatch color={`${color}-5`} />
          <Flex />
          <ColorSwatch color={`${color}-6`} />
          <Flex />
          <ColorSwatch color={`${color}-7`} />
        </Flex>
      ))}
    </Flex>
  );
};

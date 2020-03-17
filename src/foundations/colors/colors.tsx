import * as React from 'react';
import styled from 'styled-components';
import { Flex } from 'foundations/layout';
import { Heading, Body } from 'foundations/typography';

const COLORS = [
  'grey',
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
  'rose',
];

const ColorSwatch = styled.div`
  height: 64px;
  width: 64px;
  ${props => `background-color: var(--${props.color || 'grey-50'});`}
  filter: saturate(1);
`;

export const Colors = () => {
  return (
    <Flex column>
      <Heading>Colors</Heading>
      <Body>Colors are used for lots of cool things</Body>
      <Flex p="1em" />
      <Flex column>
        {COLORS.map(color => (
          <Flex column p=".5em" key={color}>
            <Heading>{color}</Heading>
            <Flex key={color}>
              <ColorSwatch color={`${color}-1`} />
              <ColorSwatch color={`${color}-2`} />
              <ColorSwatch color={`${color}-3`} />
              <ColorSwatch color={`${color}-4`} />
              <ColorSwatch color={`${color}-5`} />
              <ColorSwatch color={`${color}-6`} />
              <ColorSwatch color={`${color}-7`} />
              <ColorSwatch color={`${color}-8`} />
              <ColorSwatch color={`${color}-9`} />
              <ColorSwatch color={`${color}-10`} />
            </Flex>
            <Flex p="1em" />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

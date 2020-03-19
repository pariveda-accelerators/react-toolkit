import React from 'react';
import styled from 'styled-components';
import { Flex } from 'foundations/layout';
import { SectionTitle, Body } from 'foundations/typography';
import { COLORS } from '.';

const getBackgroundColor = (color = 'grey-50') => {
  return `var(--${color})`;
};

const ColorSwatch = styled.div`
  height: 64px;
  width: 64px;
  background-color: ${props => getBackgroundColor(props.color)};
  filter: saturate(1);
`;

export const Colors = () => {
  return (
    <Flex column>
      <SectionTitle>Colors</SectionTitle>
      <Body>Colors are used for lots of cool things</Body>
      <Flex p="1em" />
      <Flex column>
        {COLORS.slice(2).map(color => (
          <Flex column p=".5em" key={color}>
            <SectionTitle>{color}</SectionTitle>
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

import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'foundations/layout';
import { SectionTitle, Body } from 'foundations/typography';
import { COLOR, TColorShade } from '.';

const ColorSwatch = styled(Box)`
  height: 64px;
  width: 64px;
`;

export const Colors = () => {
  return (
    <Flex column pl>
      <SectionTitle>Colors</SectionTitle>
      <Body>Colors are used for lots of cool things</Body>
      <Flex pm />
      <Flex column>
        {COLOR.slice(2).map((color: string) => (
          <Flex column ps key={color}>
            <SectionTitle>{color}</SectionTitle>
            <Flex key={color}>
              <ColorSwatch bg={`${color}-1` as TColorShade} />
              <ColorSwatch bg={`${color}-2` as TColorShade} />
              <ColorSwatch bg={`${color}-3` as TColorShade} />
              <ColorSwatch bg={`${color}-4` as TColorShade} />
              <ColorSwatch bg={`${color}-5` as TColorShade} />
              <ColorSwatch bg={`${color}-6` as TColorShade} />
              <ColorSwatch bg={`${color}-7` as TColorShade} />
              <ColorSwatch bg={`${color}-8` as TColorShade} />
              <ColorSwatch bg={`${color}-9` as TColorShade} />
            </Flex>
            <Flex pm />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

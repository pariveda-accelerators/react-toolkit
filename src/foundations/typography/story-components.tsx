import React from 'react';
import styled from 'styled-components';
import { Fonts } from '.';
import { Block, Flex } from 'foundations/layout';

const Hr = styled.hr`
  border: 1px solid var(--grey-8);
`;

export const Typography = () => (
  <Flex column p="2em">
    <Block>
      <Fonts.Display>Typography</Fonts.Display>
      <Hr />
      <Fonts.Title>All Fonts</Fonts.Title>
      {Object.keys(Fonts).map((font) => {
        const Component = Fonts[font];
        return <Component key={font}>{font}</Component>;
      })}
    </Block>
  </Flex>
);

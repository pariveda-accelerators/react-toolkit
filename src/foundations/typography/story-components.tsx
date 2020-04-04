import React from 'react';
import styled from 'styled-components';
import { Fonts } from '.';
import { Block, Flex } from 'foundations/layout';

const Hr = styled.hr`
  border: 1px solid var(--grey-8);
`;

export const Typography = () => (
  <Flex column p="2em" bgColor={{ color: 'grey', shade: '2' }}>
    <Block bgColor={{ color: 'white' }} p="0 2em">
      <Fonts.Title h1>Typography</Fonts.Title>
      <Hr />
      <Fonts.Subtitle>Types</Fonts.Subtitle>
      {Object.keys(Fonts).map(font => {
        const Component = Fonts[font];
        return <Component key={font}>{font}</Component>;
      })}
    </Block>
  </Flex>
);

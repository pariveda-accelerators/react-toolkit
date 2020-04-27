import React from 'react';
import styled from 'styled-components';
import { Fonts } from '.';
import { Block, Flex } from 'foundations/layout';

const Hr = styled.hr`
  border: 1px solid var(--grey-8);
`;

export const Typography = () => (
  <Flex column pl bg="grey-2">
    <Block bg="white" ps>
      <Fonts.Title h1>Typography</Fonts.Title>
      <Hr />
      {Object.keys(Fonts).map(font => {
        const Component = Fonts[font];
        return <Component key={font}>{font}</Component>;
      })}
    </Block>
    <Flex pm />
    <Block bg="white" ps>
      <Fonts.Title h1>Alignment</Fonts.Title>
      <Hr />
      <Fonts.SectionTitle left>Left</Fonts.SectionTitle>
      <Fonts.SectionTitle center>Center</Fonts.SectionTitle>
      <Fonts.SectionTitle right>Right</Fonts.SectionTitle>
    </Block>
    <Flex pm />
    <Block bg="white" ps>
      <Fonts.Title h1>Styles</Fonts.Title>
      <Hr />
      <Fonts.SectionTitle bold>Bold</Fonts.SectionTitle>
      <Fonts.SectionTitle strong>Strong</Fonts.SectionTitle>
      <Fonts.SectionTitle italics>Italics</Fonts.SectionTitle>
      <Fonts.SectionTitle emphasis>Emphasis</Fonts.SectionTitle>
      <Fonts.SectionTitle bold italics>
        Bold + Italics
      </Fonts.SectionTitle>
      <Fonts.SectionTitle strong emphasis>
        Strong + Emphasis
      </Fonts.SectionTitle>
    </Block>
    <Flex pm />
    <Block bg="white" ps>
      <Fonts.Title h1>Text Transform</Fonts.Title>
      <Hr />
      <Fonts.SectionTitle none>none</Fonts.SectionTitle>
      <Fonts.SectionTitle uppercase>uppercase</Fonts.SectionTitle>
      <Fonts.SectionTitle lowercase>LOWERCASE</Fonts.SectionTitle>
      <Fonts.SectionTitle capitalize>
        capitalized affects every word
      </Fonts.SectionTitle>
    </Block>
  </Flex>
);

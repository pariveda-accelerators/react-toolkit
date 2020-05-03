import React from 'react';
import styled from 'styled-components';
import { Fonts, Block, Flex } from 'foundations';

const Hr = styled.hr`
  border: 1px solid var(--grey-8);
`;

export const Typography = () => (
  <Flex direction="column" p="0" bg="grey-2">
    <Block bg="white" p="s">
      <Fonts.Title tag="h2">Typography</Fonts.Title>
      <Hr />
      {Object.keys(Fonts).map(font => {
        const Component = Fonts[font];
        return <Component key={font}>{font}</Component>;
      })}
    </Block>
    <Flex p="0" />
    <Block bg="white" p="s">
      <Fonts.Title tag="h2">Alignment</Fonts.Title>
      <Hr />
      <Fonts.SectionTitle align="left">Left</Fonts.SectionTitle>
      <Fonts.SectionTitle align="center">Center</Fonts.SectionTitle>
      <Fonts.SectionTitle align="right">Right</Fonts.SectionTitle>
    </Block>
    <Flex p="0" />
    <Block bg="white" p="s">
      <Fonts.Title tag="h2">Styles</Fonts.Title>
      <Hr />
      <Fonts.SectionTitle weight="bold">Bold</Fonts.SectionTitle>
      <Fonts.SectionTitle weight="strong">Strong</Fonts.SectionTitle>
      <Fonts.SectionTitle fStyle="italics">Italics</Fonts.SectionTitle>
      <Fonts.SectionTitle fStyle="emphasis">Emphasis</Fonts.SectionTitle>
      <Fonts.SectionTitle weight="bold" fStyle="italics">
        Bold + Italics
      </Fonts.SectionTitle>
      <Fonts.SectionTitle weight="bold" fStyle="emphasis">
        Bold + Emphasis
      </Fonts.SectionTitle>
      <Fonts.SectionTitle weight="strong" fStyle="italics">
        Strong + Italics
      </Fonts.SectionTitle>
      <Fonts.SectionTitle weight="strong" fStyle="emphasis">
        Strong + Emphasis
      </Fonts.SectionTitle>
    </Block>
    <Flex p="0" />
    <Block bg="white" p="s">
      <Fonts.Title tag="h2">Text Transform</Fonts.Title>
      <Hr />
      <Fonts.SectionTitle transform="none">none</Fonts.SectionTitle>
      <Fonts.SectionTitle transform="uppercase">uppercase</Fonts.SectionTitle>
      <Fonts.SectionTitle transform="lowercase">LOWERCASE</Fonts.SectionTitle>
      <Fonts.SectionTitle transform="capitalize">
        capitalized affects every word
      </Fonts.SectionTitle>
    </Block>
  </Flex>
);

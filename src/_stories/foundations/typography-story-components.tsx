import React from 'react';
import styled from 'styled-components';
import { Fonts, Block, Flex } from 'foundations';
import { Story, FloatingPropTable } from '_stories/components';

const Hr = styled.hr`
  border: 1px solid var(--grey-8);
`;

const align = {
  left: 'text-align: left',
  center: 'text-align: center',
  right: 'text-align: right',
};
const transform = {
  none: 'text-transform: none',
  uppercase: 'text-transform: uppercase',
  lowercase: 'text-transform: lowercase',
  capitalize: 'text-transform: capitalize',
};
export const Typography = () => (
  <>
    <Story title="Typography">
      <FloatingPropTable
        propName="Font Types"
        exampleUse="<Fonts.Display>{...}</Fonts.Display>"
      >
        <Block>
          {Object.keys(Fonts).map(font => {
            const Component = Fonts[font];
            return <Component key={font}>{font}</Component>;
          })}
        </Block>
      </FloatingPropTable>
      <FloatingPropTable
        data={align}
        className="text--"
        propName="Text Align"
        exampleUse={`align="center"`}
      />
      <FloatingPropTable
        data={transform}
        className="text--"
        propName="Text Transform"
        exampleUse={`transform="uppercase"`}
      />
    </Story>
    <Flex direction="column" p="0" bg="grey-2">
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
    </Flex>
  </>
);

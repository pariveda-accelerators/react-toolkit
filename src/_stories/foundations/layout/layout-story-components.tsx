import React from 'react';
import { Flex as Fx, Row, Fonts } from 'foundations';
import { IKeyedObject } from '../../../utilities';
import { Story, FloatingCard, PropTable, ColorStack } from '_stories/components';

//#region Box Components
const sizeMap = {
  '0': '0',
  s: '.5em',
  m: '1em',
  l: '2em',
} as IKeyedObject<string>;
const getSizeStyle = (style: string) =>
  Object.keys(sizeMap).reduce(
    (styles, size) => ({
      ...styles,
      [size]: `${style}: ${sizeMap[size]}`,
    }),
    {}
  );
const padding = getSizeStyle('padding');
const boxPadding = <PropTable data={padding} className="p" />;
const margin = getSizeStyle('margin');
const boxMargin = <PropTable data={margin} className="m" />;

const display = {
  none: 'display: none',
  block: 'display: block',
  'inline-block': 'display: inline-block',
  flex: 'display: flex',
  'inline-flex': 'display: inline-flex',
  grid: 'display: grid',
  'inline-grid': 'display: inline-grid',
  'list-item': 'display: list-item',
};
const boxDisplay = <PropTable data={display} className="" />;
//#endregion Box Components
//#region Flex Components
//#endregion Flex Components

export const Box = () => (
  <Story title="Box">
    <Fx>
      <Fonts.Subtitle>Configuration</Fonts.Subtitle>
    </Fx>
    <FloatingCard>
      <Fonts.SectionTitle weight="bold">Padding</Fonts.SectionTitle>
      {boxPadding}
    </FloatingCard>
    <FloatingCard>
      <Fonts.SectionTitle weight="bold">Margin</Fonts.SectionTitle>
      {boxMargin}
    </FloatingCard>
    <FloatingCard>
      <Fonts.SectionTitle weight="bold">Display</Fonts.SectionTitle>
      {boxDisplay}
    </FloatingCard>
    <FloatingCard>
      <Fonts.SectionTitle weight="bold">Background Color</Fonts.SectionTitle>
      <Row p="0">
        <ColorStack color="azure" />
        <ColorStack color="seafoam" />
      </Row>
    </FloatingCard>
  </Story>
);

export const Flex = () => (
  <Fx>
    <Fx direction="column" p="0">
      <Fx p="s">Row1</Fx>
      <Fx p="s">Row2</Fx>
    </Fx>
    <Fx direction="column" p="0" bg="red-3">
      <Fx p="s">Row1</Fx>
      <Fx p="s">Row2</Fx>
    </Fx>
  </Fx>
);

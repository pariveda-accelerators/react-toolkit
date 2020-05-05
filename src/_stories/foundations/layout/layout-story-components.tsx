import React from 'react';
import { Flex as Fx, Fonts, Column } from 'foundations';
import { IKeyedObject } from '../../../utilities';
import {
  Story,
  ColorStack,
  FloatingPropTable,
  TRenderColorShade,
} from '_stories/components';

const sizeMap = {
  '0': '0;',
  s: '.5em;',
  m: '1em;',
  l: '2em;',
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
const margin = getSizeStyle('margin');

const display = {
  none: 'display: none;',
  block: 'display: block;',
  'inline-block': 'display: inline-block;',
  flex: 'display: flex;',
  'inline-flex': 'display: inline-flex;',
  grid: 'display: grid;',
  'inline-grid': 'display: inline-grid;',
  'list-item': 'display: list-item;',
};

const renderColorShade: TRenderColorShade = ({ shade, colorShade }) => (
  <>
    <Fonts.Body weight="bold" color={Number(shade) >= 5 ? 'white' : 'black'}>
      {colorShade}
    </Fonts.Body>
    <Fx flex="grow" />
    <Fonts.Body weight="bold" color={Number(shade) >= 5 ? 'white' : 'black'}>
      bg="{colorShade}"
    </Fonts.Body>
  </>
);

export const Box = () => (
  <Story title="Layout - Box">
    <Fx>
      <Fonts.Subtitle>Configuration</Fonts.Subtitle>
    </Fx>
    <FloatingPropTable
      data={padding}
      className="p"
      propName="Padding"
      exampleUse={`p="s"`}
    />
    <FloatingPropTable
      data={margin}
      className="m"
      propName="Margin"
      exampleUse={`m="s"`}
    />
    <FloatingPropTable data={display} propName="Display" exampleUse={`d="flex"`} />
    <FloatingPropTable
      className="bg"
      propName="Background Color"
      exampleUse={`bg="seafoam-5"`}
    >
      <Column p="0">
        <ColorStack
          color="azure"
          shades={['1', '3', '5', '7', '9']}
          renderColorShade={renderColorShade}
        />
        <ColorStack
          color="seafoam"
          shades={['1', '3', '5', '7', '9']}
          renderColorShade={renderColorShade}
        />
      </Column>
      <Fx />
      <Fonts.Body>
        See <b>Foundations | Colors</b> for a list of all available colors
      </Fonts.Body>
    </FloatingPropTable>
  </Story>
);
//#endregion Box
//#region Flex
const direction = {
  row: 'flex-direction: row;',
  column: 'flex-direction: column;',
};
const alignSelf = {
  start: 'align-self: flex-start;',
  center: 'align-self: center;',
  end: 'align-self: flex-end;',
  stretch: 'align-self: stretch;',
  baseline: 'align-self: baseline;',
};
const alignItems = {
  start: 'align-items: flex-start;',
  center: 'align-items: center;',
  end: 'align-items: flex-end;',
  stretch: 'align-items: stretch;',
  baseline: 'align-items: baseline;',
};
const justifyContent = {
  start: 'justify-content: flex-start;',
  center: 'justify-content: center;',
  end: 'justify-content: flex-end;',
  stretch: 'justify-content: stretch;',
  'space-between': 'justify-content: space-between;',
  'space-around': 'justify-content: space-around;',
};
const flex = {
  grow: 'flex: 1 0 auto;',
  shrink: 'flex: 0 1 0;',
  stay: 'flex: 0 0 auto;',
  equal: 'flex: 1 1 0;',
  auto: 'flex: 1 1 auto;',
};

export const Flex = () => (
  <Story title="Layout - Flex">
    <Fx>
      <Fonts.Subtitle>Configuration</Fonts.Subtitle>
    </Fx>
    <FloatingPropTable
      data={direction}
      propName="Direction"
      exampleUse={`direction="column"`}
    />
    <FloatingPropTable
      data={alignItems}
      className="flex--ai-"
      propName="Align Items"
      exampleUse={`alignItems="stretch"`}
    />
    <FloatingPropTable
      data={alignSelf}
      className="flex--as-"
      propName="Align Self"
      exampleUse={`alignSelf="baseline"`}
    />
    <FloatingPropTable
      data={justifyContent}
      className="flex--jc-"
      propName="Align Items"
      exampleUse={`m="s"`}
    />
    <FloatingPropTable
      data={flex}
      className=""
      propName="Flex"
      exampleUse={`flex="equal"`}
    />
  </Story>
);
//#endregion Flex

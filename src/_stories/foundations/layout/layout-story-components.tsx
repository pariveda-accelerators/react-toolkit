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

import React from 'react';
import { IKeyedObject } from '../../../utilities';
import {
  Fonts,
  Flex as Fx,
  Column,
  Grid as Gd,
  HBFGrid,
} from '../../../foundations';
import {
  TRenderColorShade,
  Story,
  FloatingPropTable,
  ColorStack,
} from '../../story-components';

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

const renderBgColorShade: TRenderColorShade = ({ shade, colorShade }) => (
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
const renderBcColorShade: TRenderColorShade = ({ colorShade }) => (
  <>
    <Fonts.Body weight="bold">{colorShade}</Fonts.Body>
    <Fx flex="grow" />
    <Fonts.Body weight="bold">bg="{colorShade}"</Fonts.Body>
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
          propName="bg"
          renderColorShade={renderBgColorShade}
        />
        <ColorStack
          color="seafoam"
          shades={['1', '3', '5', '7', '9']}
          propName="bg"
          renderColorShade={renderBgColorShade}
        />
      </Column>
      <Fx />
      <Fonts.Body>
        See <b>Foundations | Colors</b> for a list of all available colors
      </Fonts.Body>
    </FloatingPropTable>
    <FloatingPropTable
      className="bc"
      propName="Border Color"
      exampleUse={`bc="grey-6"`}
    >
      <Column p="0">
        <ColorStack
          color="azure"
          shades={['1', '3', '5', '7', '9']}
          propName="bc"
          renderColorShade={renderBcColorShade}
        />
        <ColorStack
          color="seafoam"
          shades={['1', '3', '5', '7', '9']}
          propName="bc"
          renderColorShade={renderBcColorShade}
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
//#region Block
const textOverflow = {
  clip: 'text-overflow: clip;',
  ellipsis: 'text-overflow: ellipsis;',
};
const overflow = {
  visible: 'overflow: visible;',
  hidden: 'overflow: hidden;',
  scroll: 'overflow: scroll;',
  'scroll-x': 'overflow: scroll-x;',
  'scroll-y': 'overflow: scroll-y;',
  auto: 'overflow: auto;',
};
const overflowWrap = {
  normal: 'overflow-wrap: normal;',
  'break-word': 'overflow-wrap: break-word;',
};
const whiteSpace = {
  normal: 'white-space: normal;',
  nowrap: 'white-space: nowrap;',
  pre: 'white-space: pre;',
  'pre-wrap': 'white-space: pre-wrap;',
  'pre-line': 'white-space: pre-line;',
  'break-spaces': 'white-space: break-spaces;',
};

export const Block = () => (
  <Story title="Layout - Block">
    <Fx>
      <Fonts.Subtitle>Configuration</Fonts.Subtitle>
    </Fx>
    <FloatingPropTable
      data={textOverflow}
      className="block--to-"
      propName="Text Overflow"
      exampleUse={`textOverflow="ellipsis"`}
    />
    <FloatingPropTable
      data={overflow}
      className="block--o-"
      propName="Overflow"
      exampleUse={`overflow="hidden"`}
    />
    <FloatingPropTable
      data={overflowWrap}
      className="block--ow-"
      propName="Overflow Wrap"
      exampleUse={`overflowWrap="break-word"`}
    />
    <FloatingPropTable
      data={whiteSpace}
      className="block--ws-"
      propName="White Space"
      exampleUse={`whiteSpace="nowrap"`}
    />
  </Story>
);
//#endregion Block
//#region Grid
export const Grid = () => {
  const tbtGrid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Story title="Layout - Grid">
      <Fx>
        <Fonts.Subtitle>Description</Fonts.Subtitle>
      </Fx>
      <Column>
        <Fonts.Body>
          Grids are layouts that may be used to arrange UI elements according to a
          grid that divides an area into rows &amp; columns. There are a variety of
          predefined grids available in our toolkit including Twelve-by-Twelve &amp;
          Header-Body-Footer.
        </Fonts.Body>
        <Fx />
        <Fx bg="red-2" p="0">
          <Fx p="s" bg="red-6" />
          <Fx p="s" />
          <Fonts.Body>
            Notice how some grids have gutters / alleys while some do not!
          </Fonts.Body>
        </Fx>
      </Column>
      <Fx>
        <Column>
          <Fonts.SectionSubtitle>Twelve-By-Twelve (tbt)</Fonts.SectionSubtitle>
          <Gd gridType="tbt">
            {tbtGrid.map(row =>
              tbtGrid.map(col => <Fx key={`${row}-${col}`} p="s" bg="grey-3" />)
            )}
          </Gd>
        </Column>
        <Column>
          <Fonts.SectionSubtitle>Header-Body-Footer (hbf)</Fonts.SectionSubtitle>
          <HBFGrid>
            <HBFGrid.Header p="s" bg="grey-3">
              <Fonts.SectionTitle>Header</Fonts.SectionTitle>
            </HBFGrid.Header>
            <HBFGrid.Body p="s" bg="grey-3">
              <Fonts.SectionTitle>Body</Fonts.SectionTitle>
            </HBFGrid.Body>
            <HBFGrid.Footer p="s" bg="grey-3">
              <Fonts.SectionTitle>Footer</Fonts.SectionTitle>
            </HBFGrid.Footer>
          </HBFGrid>
        </Column>
      </Fx>
    </Story>
  );
};
//#endregion Grid

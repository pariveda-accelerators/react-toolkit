import React, { FC } from 'react';
import { Box as Bx, Flex as Fx, Fonts, SHADE } from 'foundations';
import { IKeyedObject } from '../../utilities';
import { IFlex } from './flex';
import { TColorShade } from 'foundations/colors';

//#region Shared Components
const Row: FC<IFlex> = props => <Fx {...props} />;
const Column: FC<IFlex> = props => (
  <Fx d="flex" direction="column" p="s" {...props} />
);

interface IKeyValueTable {
  data: IKeyedObject<string>;
}
const KeyValueTable: FC<IKeyValueTable> = ({ data }) => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  return (
    <Row>
      <Column>
        <Fonts.Body weight="bold">Value</Fonts.Body>
        {keys.map(key => (
          <Fonts.Body key={key}>{key}</Fonts.Body>
        ))}
      </Column>
      <Column>
        <Fonts.Body weight="bold">Effect</Fonts.Body>
        {values.map(value => (
          <Fonts.Body key={value}>{value}</Fonts.Body>
        ))}
      </Column>
    </Row>
  );
};
//#endregion Shared Components
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
const boxPadding = <KeyValueTable data={padding} />;
const margin = getSizeStyle('margin');
const boxMargin = <KeyValueTable data={margin} />;

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
const boxDisplay = <KeyValueTable data={display} />;

interface IBgColorTable {
  color: string;
}
const BgColorTable: FC<IBgColorTable> = ({ color }) => (
  <Column>
    {SHADE.map(shade => {
      const colorShade = `${color}-${shade}` as TColorShade;
      return (
        <Row key={colorShade}>
          <Fonts.Body>{colorShade}</Fonts.Body>
          <Bx m="s" bg={colorShade} p="m" />
        </Row>
      );
    })}
  </Column>
);
//#endregion Box Components
//#region Flex Components
//#endregion Flex Components

export const Box = () => (
  <Bx d="block">
    <Fonts.Title>Box</Fonts.Title>
    <Fonts.Subtitle>Configuration</Fonts.Subtitle>
    <Fonts.SectionTitle weight="bold">Padding</Fonts.SectionTitle>
    {boxPadding}
    <Fonts.SectionTitle weight="bold">Margin</Fonts.SectionTitle>
    {boxMargin}
    <Fonts.SectionTitle weight="bold">Display</Fonts.SectionTitle>
    {boxDisplay}
    <Fonts.SectionTitle weight="bold">Background Color</Fonts.SectionTitle>
    <Row>
      <BgColorTable color="azure" />
      <BgColorTable color="seafoam" />
      <BgColorTable color="red" />
    </Row>
  </Bx>
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

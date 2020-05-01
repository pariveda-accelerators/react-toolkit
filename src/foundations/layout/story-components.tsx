import React, { FC } from 'react';
import { Box as Bx, Flex as Fx, Fonts, SHADE } from 'foundations';
import { TBox } from './box';
import { IKeyedObject } from '../../utilities';

//#region Shared Components
const Row: FC<TBox> = props => <Bx d="flex" {...props} />;
const Column: FC<TBox> = props => <Bx d="flex" column ps {...props} />;

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
const getSizeStyle = (modifier: string, style: string) =>
  Object.keys(sizeMap).reduce(
    (styles, size) => ({
      ...styles,
      [`${modifier}${size}`]: `${style}: ${sizeMap[size]}`,
    }),
    {}
  );
const padding = getSizeStyle('p', 'padding');
const boxPadding = <KeyValueTable data={padding} />;
const margin = getSizeStyle('m', 'margin');
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
      const colorShade = `bg-${color}-${shade}`;
      const bgColor = {
        [colorShade]: true,
      };
      return (
        <Row key={colorShade}>
          <Fonts.Body>{colorShade}</Fonts.Body>
          <Bx ms {...bgColor} pm />
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
    <Fonts.SectionTitle>Padding</Fonts.SectionTitle>
    {boxPadding}
    <Fonts.SectionTitle>Margin</Fonts.SectionTitle>
    {boxMargin}
    <Fonts.SectionTitle>Display</Fonts.SectionTitle>
    {boxDisplay}
    <Fonts.SectionTitle>Background Color</Fonts.SectionTitle>
    <Row>
      <BgColorTable color="azure" />
      <BgColorTable color="seafoam" />
      <BgColorTable color="red" />
    </Row>
  </Bx>
);

export const Flex = () => (
  <Fx inline-block>
    <Fx column pm>
      <Fx ps>Row1</Fx>
      <Fx ps>Row2</Fx>
    </Fx>
    <Fx column pm bg-red-3>
      <Fx ps>Row1</Fx>
      <Fx ps>Row2</Fx>
    </Fx>
  </Fx>
);

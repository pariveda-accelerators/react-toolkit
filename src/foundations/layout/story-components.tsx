import React, { FC } from 'react';
import { Box as Bx } from 'foundations/layout';
import { Fonts } from 'foundations/typography';
import { SHADE, TColorShade } from 'foundations/colors';

//#region Box Components
interface ISizeTable {
  propName: string;
  styleName: string;
}
const SizeTable: FC<ISizeTable> = ({ propName, styleName }) => (
  <Bx>
    <Bx column p="s">
      <Fonts.Body bold>Values</Fonts.Body>
      <Fonts.Body>{propName}="s"</Fonts.Body>
      <Fonts.Body>{propName}="m"</Fonts.Body>
      <Fonts.Body>{propName}="l"</Fonts.Body>
    </Bx>
    <Bx column p="s">
      <Fonts.Body bold>Effect</Fonts.Body>
      <Fonts.Body>{styleName}: .5em</Fonts.Body>
      <Fonts.Body>{styleName}: 1em</Fonts.Body>
      <Fonts.Body>{styleName}: 2em</Fonts.Body>
    </Bx>
  </Bx>
);

interface IBgColorTable {
  color: string;
}
const BgColorTable: FC<IBgColorTable> = ({ color }) => (
  <Bx column>
    {SHADE.map(shade => {
      const colorShade = `${color}-${shade}`;
      return (
        <Bx key={colorShade}>
          <Fonts.Body>bg="{colorShade}"</Fonts.Body>
          <Bx m="s" bg={colorShade as TColorShade} p="m" />
        </Bx>
      );
    })}
  </Bx>
);

const DisplayTable: FC<{}> = () => (
  <Bx>
    <Bx column p="s">
      <Fonts.Body bold>Values</Fonts.Body>
      <Fonts.Body>d="none"</Fonts.Body>
      <Fonts.Body>d="block"</Fonts.Body>
      <Fonts.Body>d="flex"</Fonts.Body>
      <Fonts.Body>d="grid"</Fonts.Body>
      <Fonts.Body>d="list-item"</Fonts.Body>
    </Bx>
    <Bx column p="s">
      <Fonts.Body bold>Effect</Fonts.Body>
      <Fonts.Body>display: none</Fonts.Body>
      <Fonts.Body>display: block</Fonts.Body>
      <Fonts.Body>display: flex</Fonts.Body>
      <Fonts.Body>display: grid</Fonts.Body>
      <Fonts.Body>display: list-item</Fonts.Body>
    </Bx>
  </Bx>
);
//#endregion Box Components

export const Box = () => (
  <Bx d="block">
    <Fonts.Title>Box</Fonts.Title>
    <Fonts.Subtitle>Configuration</Fonts.Subtitle>
    <Fonts.SectionTitle>Padding</Fonts.SectionTitle>
    <SizeTable propName="p" styleName="padding" />
    <Fonts.SectionTitle>Margin</Fonts.SectionTitle>
    <SizeTable propName="s" styleName="margin" />
    <Fonts.SectionTitle>Background Color</Fonts.SectionTitle>
    <Bx>
      <BgColorTable color="azure" />
      <BgColorTable color="seafoam" />
      <BgColorTable color="red" />
    </Bx>
    <Fonts.SectionTitle>Display</Fonts.SectionTitle>
    <DisplayTable />
  </Bx>
);

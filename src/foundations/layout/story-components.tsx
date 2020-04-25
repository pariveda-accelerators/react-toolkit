import React, { FC } from 'react';
import { Box as Bx } from 'foundations/layout';
import { Fonts, SHADE } from 'foundations';

//#region Box Components
interface ISizeTable {
  propModifier: string;
  styleName: string;
}
const SizeTable: FC<ISizeTable> = ({ propModifier, styleName }) => (
  <Bx flex>
    <Bx flex column ps>
      <Fonts.Body bold>Values</Fonts.Body>
      <Fonts.Body>{propModifier}s</Fonts.Body>
      <Fonts.Body>{propModifier}m</Fonts.Body>
      <Fonts.Body>{propModifier}l</Fonts.Body>
    </Bx>
    <Bx flex column ps>
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
  <Bx flex column>
    {SHADE.map(shade => {
      const colorShade = `bg-${color}-${shade}`;
      const bgColor = {
        [colorShade]: true,
      };
      return (
        <Bx flex key={colorShade}>
          <Fonts.Body>{colorShade}</Fonts.Body>
          <Bx ms {...bgColor} pm />
        </Bx>
      );
    })}
  </Bx>
);

const DisplayTable: FC<{}> = () => (
  <Bx flex>
    <Bx flex column ps>
      <Fonts.Body bold>Values</Fonts.Body>
      <Fonts.Body>none</Fonts.Body>
      <Fonts.Body>block</Fonts.Body>
      <Fonts.Body>inline-block</Fonts.Body>
      <Fonts.Body>flex</Fonts.Body>
      <Fonts.Body>inline-flex</Fonts.Body>
      <Fonts.Body>grid</Fonts.Body>
      <Fonts.Body>inline-grid</Fonts.Body>
      <Fonts.Body>list-item</Fonts.Body>
    </Bx>
    <Bx flex column ps>
      <Fonts.Body bold>Effect</Fonts.Body>
      <Fonts.Body>display: none</Fonts.Body>
      <Fonts.Body>display: block</Fonts.Body>
      <Fonts.Body>display: inline-block</Fonts.Body>
      <Fonts.Body>display: flex</Fonts.Body>
      <Fonts.Body>display: inline-flex</Fonts.Body>
      <Fonts.Body>display: grid</Fonts.Body>
      <Fonts.Body>display: inline-grid</Fonts.Body>
      <Fonts.Body>display: list-item</Fonts.Body>
    </Bx>
  </Bx>
);
//#endregion Box Components

export const Box = () => (
  <Bx block>
    <Fonts.Title>Box</Fonts.Title>
    <Fonts.Subtitle>Configuration</Fonts.Subtitle>
    <Fonts.SectionTitle>Padding</Fonts.SectionTitle>
    <SizeTable propModifier="p" styleName="padding" />
    <Fonts.SectionTitle>Margin</Fonts.SectionTitle>
    <SizeTable propModifier="m" styleName="margin" />
    <Fonts.SectionTitle>Background Color</Fonts.SectionTitle>
    <Bx flex>
      <BgColorTable color="azure" />
      <BgColorTable color="seafoam" />
      <BgColorTable color="red" />
    </Bx>
    <Fonts.SectionTitle>Display</Fonts.SectionTitle>
    <DisplayTable />
  </Bx>
);

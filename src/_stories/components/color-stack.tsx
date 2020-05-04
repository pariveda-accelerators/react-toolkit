import React, { FC } from 'react';
import { Row, Column, Fonts, SHADE, Flex } from 'foundations';
import { TColorShade } from 'foundations/colors';
import { isNullOrUndefined } from '../../utilities';

interface IColorStack {
  color: string;
  shades?: string[];
}
export const ColorStack: FC<IColorStack> = ({ color, shades }) => (
  <Column flex="equal" p="s">
    <Fonts.SectionSubtitle weight="bold" transform="capitalize">
      {color}
    </Fonts.SectionSubtitle>
    {SHADE.filter(shade => isNullOrUndefined(shades) || shades.includes(shade)).map(
      shade => {
        const colorShade = `${color}-${shade}` as TColorShade;
        return (
          <Row key={colorShade} bg={colorShade}>
            <Fonts.Body weight="bold" color={Number(shade) >= 6 ? 'white' : 'black'}>
              {colorShade}
            </Fonts.Body>
            <Flex flex="grow" />
            <Fonts.Body weight="bold" color={Number(shade) >= 6 ? 'white' : 'black'}>
              bg="{colorShade}"
            </Fonts.Body>
          </Row>
        );
      }
    )}
  </Column>
);

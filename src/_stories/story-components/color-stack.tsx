import React, { FC } from 'react';
import { Row, Fonts, SHADE, Flex } from 'foundations';
import { TColorShade } from 'foundations/colors';
import { isNullOrUndefined } from '../../utilities';

export interface IRenderColorShade {
  color: string;
  shade: string;
  colorShade: TColorShade;
}
export type TRenderColorShade = ({
  color,
  shade,
  colorShade,
}: IRenderColorShade) => React.ReactNode;
interface IColorStack {
  color: string;
  shades?: string[];
  propName: string;
  renderColorShade?: TRenderColorShade;
  separateHeadingFromContent?: boolean;
}
export const ColorStack: FC<IColorStack> = ({
  color,
  shades,
  propName,
  renderColorShade,
  separateHeadingFromContent,
}) => (
  <>
    <Fonts.SectionSubtitle weight="bold" transform="capitalize">
      {color}
    </Fonts.SectionSubtitle>
    {separateHeadingFromContent && <Flex flex="grow" />}
    {SHADE.filter(shade => isNullOrUndefined(shades) || shades.includes(shade)).map(
      shade => {
        const colorShade = `${color}-${shade}` as TColorShade;
        const props = {
          [propName]: colorShade,
        };
        return (
          <Row key={colorShade} {...props}>
            {typeof renderColorShade === 'function' &&
              renderColorShade({ color, shade, colorShade })}
          </Row>
        );
      }
    )}
  </>
);

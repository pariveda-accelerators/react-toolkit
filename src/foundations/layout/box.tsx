import React, { FC } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { TColorShade } from 'foundations';
import { TBooleanConfigProp, TDefaultProps } from '../../types';
import { TFlexDirectionProp } from './flex';
import { getProps, createClassName } from '../../utilities';

//#region Padding
export const PADDING = ['p0', 'ps', 'pm', 'pl'] as const;
export type TPadding = typeof PADDING[number];
export type TPaddingProp = TBooleanConfigProp<TPadding>;
//#endregion Padding
//#region Margin
export const MARGIN = ['m0', 'ms', 'mm', 'ml'] as const;
export type TMargin = typeof MARGIN[number];
export type TMarginProp = TBooleanConfigProp<TMargin>;
//#endregion Margin
//#region Display
export const DISPLAY = [
  'none',
  'block',
  'inline-block',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'list-item',
] as const;
export type TDisplay = typeof DISPLAY[number];
export type TDisplayProp = {
  d?: TDisplay;
};
//#endregion Display
//#region Background Color
export type TBgColorProp = {
  bg?: TColorShade;
};
//#endregion Background Color

export const BOX_PROP_NAMES = ['d', 'bg'];
export type TBox = TDefaultProps &
  TPaddingProp &
  TMarginProp &
  TDisplayProp &
  TFlexDirectionProp &
  TBgColorProp;

export const Box: FC<TBox> = ({ children, className, ...props }) => {
  const tradProps = getProps(props, BOX_PROP_NAMES);
  const tradKeys = Object.keys(tradProps);
  const tradClassNames = createClassName(tradProps);
  const experiKeys = Object.keys(props).filter(key => !tradKeys.includes(key));

  return (
    <div className={classnames(className, tradClassNames, experiKeys)}>
      {children}
    </div>
  );
};

export const Block = styled(Box)`
  display: block;
`;

import React, { FC } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { TBgColorProp } from 'foundations';
import { TBooleanConfigProp, TDefaultProps } from '../../types';
import { TFlexDirectionProp } from './flex';

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
export type TDisplayProp = TBooleanConfigProp<TDisplay>;
//#endregion Display

export type TBox = TDefaultProps &
  TPaddingProp &
  TMarginProp &
  TBgColorProp &
  TDisplayProp &
  TFlexDirectionProp;

export const Box: FC<TBox> = ({ children, className, ...props }) => (
  <div className={classnames(className, ...Object.keys(props))}>{children}</div>
);

export const Block = styled(Box)`
  display: block;
`;

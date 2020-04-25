import React, { FC } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { TBgColorProp } from 'foundations';
import { IDefaultProps, TBooleanConfigProp } from '../../types';

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
];
export type TDisplay = typeof DISPLAY[number];
export type TDisplayProp = TBooleanConfigProp<TDisplay>;
//#endregion Display

export interface IBox
  extends IDefaultProps,
    TPaddingProp,
    TMarginProp,
    TBgColorProp,
    TDisplayProp {
  column?: boolean;
}

export const Box: FC<IBox> = ({ children, column, ...props }) => {
  const columnClass = props.flex ? (column && 'column') || 'row' : undefined;
  return (
    <div className={classnames(props.className, columnClass, ...Object.keys(props))}>
      {children}
    </div>
  );
};

export const Block = styled(Box)`
  display: block;
`;

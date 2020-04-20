import React, { FC } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { TBgColorProp } from 'foundations/colors';
import { IDefaultProps } from 'types/default-props';

export const SHIRT_SIZE = ['0', 's', 'm', 'l'];
export type TShirtSize = typeof SHIRT_SIZE[number];

//#region Padding
export interface IPadding {
  p0?: boolean;
  ps?: boolean;
  pm?: boolean;
  pl?: boolean;
}
export const PADDING = ['p0', 'ps', 'pm', 'pl'];
//#endregion Padding
//#region Margin
export interface IMargin {
  m0?: boolean;
  ms?: boolean;
  mm?: boolean;
  ml?: boolean;
}
export const MARGIN = ['m0', 'ms', 'mm', 'ml'];
//#endregion Margin
//#region Display
export interface IDisplay {
  none?: boolean;
  block?: boolean;
  'inline-block'?: boolean;
  flex?: boolean;
  'inline-flex'?: boolean;
  grid?: boolean;
  'inline-grid'?: boolean;
  'list-item'?: boolean;
}
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
//#endregion Display

export interface IBox
  extends IDefaultProps,
    IPadding,
    IMargin,
    TBgColorProp,
    IDisplay {
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

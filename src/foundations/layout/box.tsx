import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import { TColorShade, COLOR_SHADE } from 'foundations/colors';
import { getKeys } from 'utils/key-map';
import { IDefaultProps } from 'types/default-props';

export const SHIRT_SIZE = ['0', 's', 'm', 'l'];
export type TShirtSize = typeof SHIRT_SIZE[number];

export const DISPLAY = ['none', 'block', 'flex', 'grid', 'list-item'];
export type TDisplay = typeof DISPLAY[number];

export interface IBox extends IDefaultProps {
  /**
   * Padding
   */
  p?: TShirtSize;
  /**
   * Margin
   */
  m?: TShirtSize;
  /**
   * Background Color
   */
  bg?: TColorShade;
  /**
   * Display
   */
  d?: TDisplay;
  inline?: boolean;
  column?: boolean;
  [key: string]: any;
}

export const Box: FC<IBox> = ({ children, ...props }) => {
  const classNameKeys = ['p', 'm'];
  const classNameProps = getKeys<IBox>(props, classNameKeys);
  const classNames = Object.keys(classNameProps).map(
    name => `${name}${props[name]}`
  );
  const bg = `bg-${props.bg}`;
  const column =
    props.d === 'flex' ? (props.column && 'column') || 'row' : undefined;
  return (
    <div className={classnames(props.className, props.d, bg, column, ...classNames)}>
      {children}
    </div>
  );
};
Box.propTypes = {
  d: PropTypes.oneOf(DISPLAY),
  bg: PropTypes.oneOf(COLOR_SHADE),
};
Box.defaultProps = {
  d: 'flex',
  bg: 'transparent',
};

export const Block = styled(Box)`
  display: block;
`;

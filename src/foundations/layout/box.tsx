import React, { FC } from 'react';
import classnames from 'classnames';
import { IDefaultProps, getDefaultProps } from '../../types';
import { createClassName, isNullOrUndefined } from '../../utilities';
import { TColorShade } from '../colors';

//#region T Shirt Sizes
export const SHIRT_SIZE = ['0', 's', 'm', 'l'] as const;
export type TShirtSize = typeof SHIRT_SIZE[number];
//#endregion T Shirt Sizes
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
//#endregion Display

export const BOX_PROP_NAMES = ['d', 'bg'];

export interface IBox extends IDefaultProps {
  /** Padding */
  p?: TShirtSize;
  /** Margin */
  m?: TShirtSize;
  /** Display */
  d?: TDisplay;
  /** Background Color */
  bg?: TColorShade;
  /** Border Color */
  bc?: TColorShade;
}

export const Box: FC<IBox> = ({
  p,
  m,
  d,
  bg,
  bc,
  className,
  children,
  ...props
}) => {
  const defaultProps = getDefaultProps(props);
  const classNameStyles = {
    p,
    m,
    'bg--': bg,
    'bc--': bc,
  };
  const classes = createClassName(classNameStyles);
  const borderClass = !isNullOrUndefined(bc) ? 'border' : undefined;
  return (
    <div
      {...defaultProps}
      className={classnames(className, d, borderClass, ...classes)}
    >
      {children}
    </div>
  );
};
Box.defaultProps = {
  p: 'm',
  m: '0',
  d: 'flex',
};

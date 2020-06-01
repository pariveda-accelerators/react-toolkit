import React, { FC } from 'react';
import classnames from 'classnames';
import { Box, IBox } from './box';
import { createClassName } from '../../utilities';

export const BLOCK_DISPLAY = ['none', 'block', 'inline-block'] as const;
type TBlockDisplay = typeof BLOCK_DISPLAY[number];

//#region Text Overflow
export const TEXT_OVERFLOW = ['clip', 'ellipsis'] as const;
export type TTextOverflow = typeof TEXT_OVERFLOW[number];
//#endregion Text Overflow
//#region Overflow
export const OVERFLOW = [
  'visible',
  'hidden',
  'scroll',
  'scroll-x',
  'scroll-y',
  'auto',
] as const;
export type TOverflow = typeof OVERFLOW[number];
//#endregion Overflow
//#region Overflow Wrap
export const OVERFLOW_WRAP = ['normal', 'break-word'] as const;
export type TOverflowWrap = typeof OVERFLOW_WRAP[number];
//#endregion Overflow Wrap
//#region White Space
export const WHITE_SPACE = [
  'normal',
  'nowrap',
  'pre',
  'pre-wrap',
  'pre-line',
  'break-spaces',
] as const;
export type TWhiteSpace = typeof WHITE_SPACE[number];
//#endregion White Space

interface IBlock extends IBox {
  /** Display */
  d?: TBlockDisplay;
  /** Text Overflow */
  textOverflow?: TTextOverflow;
  /** Overflow */
  overflow?: TOverflow;
  /** OverflowWrap */
  overflowWrap?: TOverflowWrap;
  /** White Space */
  whiteSpace?: TWhiteSpace;
}

export const Block: FC<IBlock> = props => {
  const {
    textOverflow,
    overflow,
    overflowWrap,
    whiteSpace,
    className,
    ...restProps
  } = props;
  const blockStyles = {
    'block--to-': textOverflow,
    'block--o-': overflow,
    'block--ow-': overflowWrap,
    'block--ws-': whiteSpace,
  };
  const blockClassNames = createClassName(blockStyles);
  return <Box {...restProps} className={classnames(className, blockClassNames)} />;
};
Block.defaultProps = {
  d: 'block',
};

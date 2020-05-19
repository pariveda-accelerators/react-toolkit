import React, { FC } from 'react';
import { Box, IBox } from './box';

type TBlockDisplay = 'none' | 'block' | 'inline-block';

interface IBlock extends IBox {
  /** Display */
  d?: TBlockDisplay;
  /** Text Overflow */
  /** Overflow */
}

export const Block: FC<IBlock> = props => {
  return <Box {...props} />;
};
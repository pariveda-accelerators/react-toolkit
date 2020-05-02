import React, { FC } from 'react';
import classnames from 'classnames';
import { Box, IBox } from './box';

//#region Flex Direction
export const FLEX_DIRECTION = ['row', 'column'] as const;
export type TFlexDirection = typeof FLEX_DIRECTION[number];
//#endregion Flex Direction

type TFlexDisplay = 'none' | 'flex' | 'inline-flex';

export interface IFlex extends IBox {
  d?: TFlexDisplay;
  direction?: TFlexDirection;
}

export const Flex: FC<IFlex> = ({ direction, className, ...props }) => {
  return <Box {...props} className={classnames(className, direction)} />;
};
Flex.defaultProps = {
  d: 'flex',
  direction: 'row',
};

export const Row: FC<any> = props => <Flex {...props} direction="row" />;
export const Column: FC<any> = props => <Flex {...props} direction="column" />;

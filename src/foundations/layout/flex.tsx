import React, { FC } from 'react';
import { Box, TPaddingProp, TMarginProp, TBgColorProp } from './box';
import { TBooleanConfigProp, TDefaultProps } from '../../types';

//#region Flex Direction
export const FLEX_DIRECTION = ['row', 'column'] as const;
export type TFlexDirection = typeof FLEX_DIRECTION[number];
export type TFlexDirectionProp = TBooleanConfigProp<TFlexDirection>;
//#endregion Flex Direction
//#region Inline
export type TInlineProp = TBooleanConfigProp<'inline'>;
//#endregion Inline

export type TFlex = TDefaultProps &
  TPaddingProp &
  TMarginProp &
  TFlexDirectionProp &
  TBgColorProp &
  TInlineProp;

export const Flex: FC<TFlex> = ({ inline, ...props }) => {
  return <Box {...props} d={inline ? 'inline-flex' : 'flex'} />;
};

export const Row: FC<any> = props => <Flex {...props} />;

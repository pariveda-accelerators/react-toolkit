import React, { FC } from 'react';
import { Box, TPaddingProp, TMarginProp, TDisplayProp } from './box';
import { TBooleanConfigProp, TDefaultProps } from '../../types';
import { TBgColorProp } from 'foundations/colors';

//#region Flex Direction
export const FLEX_DIRECTION = ['row', 'column'] as const;
export type TFlexDirection = typeof FLEX_DIRECTION[number];
export type TFlexDirectionProp = TBooleanConfigProp<TFlexDirection>;
//#endregion Flex Direction

export type TFlex =
  | TDefaultProps
  | TPaddingProp
  | TMarginProp
  | TBgColorProp
  | TFlexDirectionProp
  | Pick<TDisplayProp, 'none' | 'inline-flex' | 'flex'>;

export const Flex: FC<TFlex> = props => {
  return <Box {...props} flex />;
};

export const Row: FC<any> = props => <Flex {...props} />;

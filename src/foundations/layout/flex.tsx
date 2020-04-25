import React, { FC } from 'react';
import styled from 'styled-components';
import { Box } from './box';
import { TBooleanConfigProp } from '../../types';

//#region Flex Direction
export const FLEX_DIRECTION = ['row', 'column'] as const;
export type TFlexDirection = typeof FLEX_DIRECTION[number];
export type TFlexDirectionProp = TBooleanConfigProp<TFlexDirection>;
//#endregion Flex Direction

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

export const Row: FC<any> = props => <Flex {...props} />;

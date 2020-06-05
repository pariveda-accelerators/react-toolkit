import React, { FC } from 'react';
import { IDefaultProps } from '../../types';
import { Block, Fonts } from '../../foundations';

export const Title: FC<IDefaultProps> = ({ children }) => (
  <Block p="l" bg="seafoam-6">
    <Fonts.Title m="0" color="white">
      {children}
    </Fonts.Title>
  </Block>
);

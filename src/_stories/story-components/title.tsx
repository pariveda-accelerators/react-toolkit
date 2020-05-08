import React, { FC } from 'react';
import { Fonts, Block } from 'foundations';
import { IDefaultProps } from 'types';

export const Title: FC<IDefaultProps> = ({ children }) => (
  <Block p="l" bg="seafoam-6">
    <Fonts.Title m="0" color="white">
      {children}
    </Fonts.Title>
  </Block>
);

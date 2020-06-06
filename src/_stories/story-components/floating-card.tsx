import React, { FC } from 'react';
import { Flex } from '../../foundations';
import { IDefaultProps } from '../../types';

export const FloatingCard: FC<IDefaultProps> = ({ children }) => (
  <Flex bg="grey-1">
    <Flex direction="column" bg="white" flex="auto">
      {children}
    </Flex>
  </Flex>
);

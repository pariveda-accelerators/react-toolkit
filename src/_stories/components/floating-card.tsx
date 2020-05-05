import React, { FC } from 'react';
import { IDefaultProps } from 'types';
import { Flex } from 'foundations';

export const FloatingCard: FC<IDefaultProps> = ({ children }) => (
  <Flex bg="grey-1">
    <Flex direction="column" bg="white" flex="auto">
      {children}
    </Flex>
  </Flex>
);

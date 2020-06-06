import React, { FC } from 'react';
import { Title } from './title';
import { IDefaultProps } from '../../types';
import { Block } from '../../foundations';

interface IStory extends IDefaultProps {
  title: string;
}

export const Story: FC<IStory> = ({ title, children }) => (
  <Block p="0">
    <Title>{title}</Title>
    {children}
  </Block>
);

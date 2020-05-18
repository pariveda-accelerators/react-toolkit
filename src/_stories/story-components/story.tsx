import React, { FC } from 'react';
import { IDefaultProps } from 'types';
import { Block } from 'foundations';
import { Title } from './title';

interface IStory extends IDefaultProps {
  title: string;
}

export const Story: FC<IStory> = ({ title, children }) => (
  <Block p="0">
    <Title>{title}</Title>
    {children}
  </Block>
);

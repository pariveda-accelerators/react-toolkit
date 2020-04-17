import React from 'react';
import { Colors } from './colors/story-components';
import { Typography } from './typography/story-components';
import { Layout } from './layout/story-components';

export default {
  title: 'Foundations',
};

export const colors = () => <Colors />;
export const typography = () => <Typography />;
export const layout = () => <Layout />;

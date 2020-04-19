import React, { FC } from 'react';
import styled from 'styled-components';
import { Box } from './box';

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

export const Row: FC<any> = props => <Flex {...props} />;

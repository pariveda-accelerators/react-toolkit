import React, { FC } from 'react';
import { TColor } from 'foundations/colors';
import styled from 'styled-components';

const getPaletteColor = (color?: TColor) => {
  if (color === null) {
    return 'transparent';
  }
  return `${color}-50`;
};

interface IFlex {
  className?: string;
  column?: boolean;
  color?: TColor;
}

const UnstyledFlex: FC<IFlex> = props => {
  return <div className={props.className}>Flex</div>;
};

export const Flex = styled(UnstyledFlex)`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  background-color: ${props => getPaletteColor(props.color)};
`;

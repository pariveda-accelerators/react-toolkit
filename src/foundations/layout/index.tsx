import React, { FC } from 'react';
import { IColorObject, getPaletteColor } from 'foundations/colors';
import styled from 'styled-components';

interface IBox {
  className?: string;
  column?: boolean;
  bgColor?: IColorObject;
  p?: string;
}

const Box: FC<IBox> = props => {
  return <div className={props.className}>{props.children}</div>;
};

const getSharedProps = (props: IBox) => {
  const bgColor = props.bgColor
    ? `var(--${getPaletteColor(props.bgColor)})`
    : 'transparent';
  return `
    background-color: ${bgColor};
    padding: ${props.p ? props.p : 0};
  `;
};

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  ${props => getSharedProps(props)}
`;

export const Block = styled(Box)`
  display: block;
  ${props => getSharedProps(props)}
`;

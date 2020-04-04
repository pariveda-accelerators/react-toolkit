import React, { FC } from 'react';
import { TColor } from 'foundations/colors';
import styled from 'styled-components';
import { isNullOrUndefined } from 'utils/type-guards';

const getPaletteColor = (color?: TColor) => {
  if (isNullOrUndefined(color)) {
    return 'transparent';
  }
  return `${color}-50`;
};

interface IBox {
  className?: string;
  column?: boolean;
  color?: TColor;
  p?: string;
}

const Box: FC<IBox> = (props) => {
  return <div className={props.className}>{props.children}</div>;
};

const getSharedProps = (props: IBox) => {
  return `
    background-color: ${getPaletteColor(props.color)};
    padding: ${props.p ? props.p : 0};
  `;
};

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  ${(props) => getSharedProps(props)}
`;

export const Block = styled(Box)`
  display: block;
  ${(props) => getSharedProps(props)}
`;

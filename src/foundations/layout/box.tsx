import React, { FC } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { IColorObject, getPaletteColor } from 'foundations/colors';
import { getKeys, IKeyedObject } from 'utils/key-map';
import { isNullOrUndefined } from 'utils/type-guards';

//#region Padding
export interface IPadding {
  p0?: boolean;
  ps?: boolean;
  pm?: boolean;
  pl?: boolean;
}
export const PADDING = ['p0', 'ps', 'pm', 'pl'];
//#endregion Padding
//#region Margin
export interface IMargin {
  m0?: boolean;
  ms?: boolean;
  mm?: boolean;
  ml?: boolean;
}
export const MARGIN = ['m0', 'ms', 'mm', 'ml'];
//#endregion Margin

export interface IBox extends IPadding, IMargin {
  className?: string;
  column?: boolean;
  bgColor?: IColorObject;
  [key: string]: string | boolean | IColorObject | undefined;
}

interface IPropMap {
  [key: string]: string[];
}

const parseClassesFromProps = (props: IKeyedObject<any>, propMap: IPropMap) => {
  const values = Object.values(propMap).flat();
  const projection = getKeys(props, values);
  const projectedKeys = Object.keys(projection);
  if (projectedKeys.length === 0) {
    return [];
  }
  return projectedKeys;
};

export const Box: FC<IBox> = props => {
  const propMap = {
    padding: PADDING,
    margin: MARGIN,
  };
  const classes = parseClassesFromProps(props, propMap);
  return (
    <div className={classnames(props.className, ...classes)}>{props.children}</div>
  );
};

export const getSharedProps = (props: IBox) => {
  const bgColor = props.bgColor
    ? `var(--${getPaletteColor(props.bgColor)})`
    : 'transparent';
  return `
    background-color: ${bgColor};
  `;
};

export const Block = styled(Box)`
  display: block;
  ${props => getSharedProps(props)}
`;

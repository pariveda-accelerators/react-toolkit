import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import { IColorObject, TColorShade } from 'foundations/colors';
import { getKeys, IKeyedObject } from 'utils/key-map';

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
//#region Background Color
export interface IBgColor {
  bg?: TColorShade;
}
//#endregion
//#region Display
export interface IDisplay {
  none?: boolean;
  block?: boolean;
  flex?: boolean;
  grid?: boolean;
  'list-item'?: boolean;
}
export const DISPLAY = ['none', 'block', 'flex', 'grid', 'list-item'];
//#endregion Display
//#region Inline
export interface IInline {
  inline?: boolean;
}
export const INLINE = ['inline'];
//#endregion Inline

export interface IBox extends IPadding, IMargin, IBgColor {
  className?: string;
  column?: boolean;
  [key: string]: string | boolean | IColorObject | React.ReactNode;
}

interface IPropMap {
  [key: string]: string[] | readonly string[];
}

const parseClassesFromProps = (props: IKeyedObject<any>, propMap: IPropMap) => {
  const values = Object.values(propMap);
  const projection = values.reduce((proj, value) => {
    console.log('value: ', value);
    const matchingKeys = getKeys(props, value);
    console.log('matchingKeys: ', matchingKeys);
    const keyToUse = matchingKeys[0];
    console.log('keyToUse: ', keyToUse);
    return {
      ...proj,
      [keyToUse]: props[keyToUse],
    };
  }, {});
  const projectedKeys = Object.keys(projection);
  console.log('projection: ', projection);
  console.log('projectedKeys: ', projectedKeys);
  if (projectedKeys.length === 0) {
    return [];
  }
  return projectedKeys;
};

export const Box: FC<IBox> = props => {
  const propMap = {
    padding: PADDING,
    margin: MARGIN,
    display: DISPLAY,
  };
  const classes = parseClassesFromProps(props, propMap);
  console.log('props: ', props);
  console.log('classes: ', classes);
  const bg = `bg-${props.bg || 'transparent'}`;
  const column =
    props.display === 'flex' ? (props.column && 'column') || 'row' : undefined;
  return (
    <div className={classnames(props.className, bg, column)}>{props.children}</div>
  );
};
Box.propTypes = {
  ...DISPLAY.reduce(
    (propTypes, prop) => ({
      ...propTypes,
      [prop]: PropTypes.bool,
    }),
    {}
  ),
};
Box.defaultProps = {
  flex: true,
};

export const Block = styled(Box)`
  display: block;
`;

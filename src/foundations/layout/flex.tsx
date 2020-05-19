import React, { FC } from 'react';
import classnames from 'classnames';
import { Box, IBox } from './box';
import { createClassName } from '../../utilities';

//#region Flex Direction
export const FLEX_DIRECTION = ['row', 'column'] as const;
export type TFlexDirection = typeof FLEX_DIRECTION[number];
//#endregion Flex Direction
//#region Align
export const FLEX_ALIGN = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
export type TFlexAlign = typeof FLEX_ALIGN[number];
//#endregion Align
//#region Justify
export const JUSTIFY_CONTENT = [
  'start',
  'center',
  'end',
  'stretch',
  'space-between',
  'space-around',
] as const;
export type TJustifyContent = typeof JUSTIFY_CONTENT[number];
//#endregion Justify
//#region Flex
export const FLEX = ['grow', 'shrink', 'stay', 'equal', 'auto'] as const;
export type TFlex = typeof FLEX[number];
//#endregion Flex

export const FLEX_DISPLAY = ['none', 'flex', 'inline-flex'] as const;
type TFlexDisplay = 'none' | 'flex' | 'inline-flex';

export interface IFlex extends IBox {
  /** Display */
  d?: TFlexDisplay;
  /** Flex Direction */
  direction?: TFlexDirection;
  /** Align Self */
  alignSelf?: TFlexAlign;
  /** Align Self */
  alignItems?: TFlexAlign;
  /** Align Self */
  justifyContent?: TJustifyContent;
  /** Flexes */
  flex?: TFlex;
}

export const Row: FC<any> = props => <Flex {...props} direction="row" />;
export const Column: FC<any> = props => <Flex {...props} direction="column" />;

export class Flex extends React.Component<IFlex, {}> {
  static defaultProps = {
    d: 'flex',
    direction: 'row',
  };

  public static Row = Row;
  public static Column = Column;

  render() {
    const {
      direction,
      alignSelf,
      alignItems,
      justifyContent,
      flex,
      className,
      ...restProps
    } = this.props;
    const flexStyles = {
      'flex--as-': alignSelf,
      'flex--ai-': alignItems,
      'flex--jc-': justifyContent,
    };
    const flexClassNames = createClassName(flexStyles);
    return (
      <Box
        {...restProps}
        className={classnames(className, flex, direction, ...flexClassNames)}
      />
    );
  }
}

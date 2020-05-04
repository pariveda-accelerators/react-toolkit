import React, { FC } from 'react';
import classnames from 'classnames';
import { Box, IBox } from './box';
import { createClassName } from '../../utilities';

//#region Flex Direction
export const FLEX_DIRECTION = ['row', 'column'] as const;
export type TFlexDirection = typeof FLEX_DIRECTION[number];
//#endregion Flex Direction
//#region Align
export const ALIGN = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
export type TAlign = typeof ALIGN[number];
//#endregion Align
//#region Justify
export const JUSTIFY = ['start', 'center', 'end', 'stretch'] as const;
export type TJustify = typeof JUSTIFY[number];
//#endregion Justify
//#region Flex
export const FLEX = ['grow', 'shrink', 'stay', 'equal', 'auto'] as const;
export type TFlex = typeof FLEX[number];
//#endregion Flex

type TFlexDisplay = 'none' | 'flex' | 'inline-flex';

export interface IFlex extends IBox {
  /** Display */
  d?: TFlexDisplay;
  /** Flex Direction */
  direction?: TFlexDirection;
  /** Align Self */
  alignSelf?: TAlign;
  /** Align Self */
  alignItems?: TAlign;
  /** Align Self */
  justifyContent?: TJustify;
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
    const blockStyles = {
      'flex-as--': alignSelf,
      'flex-ai--': alignItems,
      'flex-jc--': justifyContent,
    };
    const blockClassNames = createClassName(blockStyles);
    return (
      <Box
        {...restProps}
        className={classnames(className, flex, direction, ...blockClassNames)}
      />
    );
  }
}

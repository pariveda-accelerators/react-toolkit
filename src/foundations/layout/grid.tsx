import React, { FC } from 'react';
import classnames from 'classnames';
import { Box, IBox } from './box';
import { createClassName } from '../../utilities';

export const GRID_DISPLAY = ['none', 'grid', 'inline-grid'] as const;
type TGridDisplay = typeof GRID_DISPLAY[number];

//#region Grid Type
export const GRID_TYPE = ['tbt', 'hbf'] as const;
export type TGridType = typeof GRID_TYPE[number];
//#endregion Grid Type

export interface IGrid extends IBox {
  /** Display */
  d?: TGridDisplay;
  /** Grid Type */
  gridType?: TGridType;
}

export const Grid: FC<IGrid> = ({ className, gridType, ...props }) => {
  const gridStyles = {
    'grid--': gridType,
  };
  const blockClassNames = createClassName(gridStyles);
  return <Box {...props} className={classnames(className, blockClassNames)} />;
};
Grid.defaultProps = {
  d: 'grid',
  gridType: 'tbt',
  p: '0',
};

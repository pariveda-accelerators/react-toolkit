import React, { FC } from 'react';
import classnames from 'classnames';
import { IBox, Box } from '../box';
import { Grid, IGrid } from '../grid';

const HBFHeader: FC<IBox> = ({ className, ...props }) => (
  <Box {...props} className={classnames(className, 'grid-header')} />
);
const HBFBody: FC<IBox> = ({ className, ...props }) => (
  <Box {...props} className={classnames(className, 'grid-body')} />
);
const HBFFooter: FC<IBox> = ({ className, ...props }) => (
  <Box {...props} className={classnames(className, 'grid-footer')} />
);

type THBFGrid = Omit<IGrid, 'gridType'>;

export class HBFGrid extends React.PureComponent<THBFGrid> {
  static Header = HBFHeader;
  static Body = HBFBody;
  static Footer = HBFFooter;

  render() {
    return <Grid {...this.props} gridType="hbf" />;
  }
}

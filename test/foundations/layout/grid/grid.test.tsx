import React from 'react';
import { render } from '@testing-library/react';
import { renderAndTestProps } from '../../../../src/utilities/testing-utils';
import { GRID_DISPLAY, GRID_TYPE, Grid } from '../../../../src/foundations';

describe('Grid', () => {
  describe('Base Grid', () => {
    it('Renders default', () => {
      const { getByText } = render(<Grid>grid</Grid>);
      const grid = getByText('grid');
      expect(grid).toMatchSnapshot();
      expect(grid).toHaveClass('grid', 'p0', 'grid--tbt');
    });
    it('Handles display props', () => {
      renderAndTestProps(Grid, GRID_DISPLAY, 'd');
    });
    it('Handles grid type props', () => {
      renderAndTestProps(Grid, GRID_TYPE, 'gridType', 'grid--');
    });
  });
});

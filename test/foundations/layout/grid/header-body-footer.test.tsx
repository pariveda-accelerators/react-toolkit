import React from 'react';
import { render } from '@testing-library/react';
import { HBFGrid } from '../../../../src/foundations';

describe('Grid', () => {
  describe('HBF Grid', () => {
    it('Renders default', () => {
      const { baseElement, getByText } = render(
        <HBFGrid>
          <HBFGrid.Header>Header</HBFGrid.Header>
          <HBFGrid.Body>Body</HBFGrid.Body>
          <HBFGrid.Footer>Footer</HBFGrid.Footer>
        </HBFGrid>
      );
      const grid = baseElement.children[0].children[0];
      const header = getByText('Header');
      const body = getByText('Body');
      const footer = getByText('Footer');
      expect(grid).toMatchSnapshot();
      expect(grid).toHaveClass('grid', 'p0', 'grid--hbf');
      expect(header).toHaveClass('grid-header');
      expect(body).toHaveClass('grid-body');
      expect(footer).toHaveClass('grid-footer');
    });
  });
});

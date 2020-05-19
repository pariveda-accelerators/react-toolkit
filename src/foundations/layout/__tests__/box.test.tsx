import React from 'react';
import { Box } from 'foundations';
import { render } from '@testing-library/react';
import { COLOR_SHADE } from 'foundations';
import { SHIRT_SIZE, DISPLAY } from '../box';
import { renderAndTestProps } from '../../../utilities';

describe('Box', () => {
  it('Renders default', () => {
    const { getByText } = render(<Box>box</Box>);
    const box = getByText('box');
    expect(box).toMatchSnapshot();
    expect(box).toHaveClass('flex', 'pm', 'm0');
  });
  it('Handles padding props', () => {
    renderAndTestProps(Box, SHIRT_SIZE, 'p', 'p');
  });
  it('Handles margin props', () => {
    renderAndTestProps(Box, SHIRT_SIZE, 'm', 'm');
  });
  it('Handles display props', () => {
    renderAndTestProps(Box, DISPLAY, 'd');
  });
  it('Handles background color props', () => {
    renderAndTestProps(Box, COLOR_SHADE, 'bg', 'bg--');
  });
});

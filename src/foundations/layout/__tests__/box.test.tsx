import React from 'react';
import { render } from '@testing-library/react';
import { SHIRT_SIZE, DISPLAY, Box } from '../box';
import { renderAndTestProps } from '../../../utilities/testing-utils';
import { COLOR_SHADE } from '../../colors';

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
  it('Handles border color props', () => {
    renderAndTestProps(Box, COLOR_SHADE, 'bc', 'bc--');
  });
});

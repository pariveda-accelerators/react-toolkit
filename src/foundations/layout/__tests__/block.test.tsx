import React from 'react';
import { Block } from 'foundations';
import { render } from '@testing-library/react';
import {
  TEXT_OVERFLOW,
  BLOCK_DISPLAY,
  OVERFLOW,
  OVERFLOW_WRAP,
  WHITE_SPACE,
} from '../block';
import { renderAndTestProps } from '../../../utilities';

describe('Block', () => {
  it('Renders default', () => {
    const { getByText } = render(<Block>block</Block>);
    const block = getByText('block');
    expect(block).toMatchSnapshot();
    expect(block).toHaveClass('block', 'pm', 'm0');
  });
  it('Handles display props', () => {
    renderAndTestProps(Block, BLOCK_DISPLAY, 'd');
  });
  it('Handles text overflow props', () => {
    renderAndTestProps(Block, TEXT_OVERFLOW, 'textOverflow', 'block--to-');
  });
  it('Handles overflow props', () => {
    renderAndTestProps(Block, OVERFLOW, 'overflow', 'block--o-');
  });
  it('Handles overflow wrap props', () => {
    renderAndTestProps(Block, OVERFLOW_WRAP, 'overflowWrap', 'block--ow-');
  });
  it('Handles white space props', () => {
    renderAndTestProps(Block, WHITE_SPACE, 'whiteSpace', 'block--ws-');
  });
});

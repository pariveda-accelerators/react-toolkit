import React from 'react';
import { Box } from 'foundations';
import { render } from '@testing-library/react';
import { COLOR_SHADE } from 'foundations';

describe('Box', () => {
  it('Renders default', () => {
    const { getByText } = render(<Box>box</Box>);
    const box = getByText('box');
    expect(box).toMatchSnapshot();
    expect(box).toHaveClass('flex', 'pm', 'm0');
  });
  it('Handles padding props', () => {
    const { getByText } = render(
      <>
        <Box p="0">p0</Box>
        <Box p="s">ps</Box>
        <Box p="m">pm</Box>
        <Box p="l">pl</Box>
      </>
    );
    const p0 = getByText('p0');
    const ps = getByText('ps');
    const pm = getByText('pm');
    const pl = getByText('pl');

    expect(p0).toHaveClass('p0');
    expect(ps).toHaveClass('ps');
    expect(pm).toHaveClass('pm');
    expect(pl).toHaveClass('pl');
  });
  it('Handles margin props', () => {
    const { getByText } = render(
      <>
        <Box m="0">m0</Box>
        <Box m="s">ms</Box>
        <Box m="m">mm</Box>
        <Box m="l">ml</Box>
      </>
    );
    const m0 = getByText('m0');
    const ms = getByText('ms');
    const mm = getByText('mm');
    const ml = getByText('ml');

    expect(m0).toHaveClass('m0');
    expect(ms).toHaveClass('ms');
    expect(mm).toHaveClass('mm');
    expect(ml).toHaveClass('ml');
  });
  it('Handles display props', () => {
    const { getByText } = render(
      <>
        <Box d="none">none</Box>
        <Box d="block">block</Box>
        <Box d="inline-block">inline-block</Box>
        <Box d="flex">flex</Box>
        <Box d="inline-flex">inline-flex</Box>
        <Box d="grid">grid</Box>
        <Box d="inline-grid">inline-grid</Box>
        <Box d="list-item">list-item</Box>
      </>
    );
    const none = getByText('none');
    const block = getByText('block');
    const inlineBlock = getByText('inline-block');
    const flex = getByText('flex');
    const inlineFlex = getByText('inline-flex');
    const grid = getByText('grid');
    const inlineGrid = getByText('inline-grid');
    const listItem = getByText('list-item');

    expect(none).toHaveClass('none');
    expect(block).toHaveClass('block');
    expect(inlineBlock).toHaveClass('inline-block');
    expect(flex).toHaveClass('flex');
    expect(inlineFlex).toHaveClass('inline-flex');
    expect(grid).toHaveClass('grid');
    expect(inlineGrid).toHaveClass('inline-grid');
    expect(listItem).toHaveClass('list-item');
  });
  it('Handles background color props', () => {
    const { getByText, baseElement } = render(
      <>
        {COLOR_SHADE.map(color => (
          <Box key={color} bg={color}>
            {color}
          </Box>
        ))}
      </>
    );
    expect(baseElement).toMatchSnapshot();
    COLOR_SHADE.forEach(color => {
      const element = getByText(color);
      expect(element).toHaveClass(`bg--${color}`);
    });
  });
});

import React from 'react';
import { Box } from 'foundations';
import { render } from '@testing-library/react';
import { COLOR_SHADE } from 'foundations';

describe('Box', () => {
  it('Renders Default', () => {
    const { baseElement } = render(<Box />);
    expect(baseElement).toMatchSnapshot();
  });
  it('Handles Padding Props', () => {
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

    expect(p0).toHaveClass('p--0');
    expect(ps).toHaveClass('p--s');
    expect(pm).toHaveClass('p--m');
    expect(pl).toHaveClass('p--l');
  });
  it('Handles Margin Props', () => {
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

    expect(m0).toHaveClass('m--0');
    expect(ms).toHaveClass('m--s');
    expect(mm).toHaveClass('m--m');
    expect(ml).toHaveClass('m--l');
  });
  it('Handles Display Props', () => {
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

    expect(none).toHaveClass('d--none');
    expect(block).toHaveClass('d--block');
    expect(inlineBlock).toHaveClass('d--inline-block');
    expect(flex).toHaveClass('d--flex');
    expect(inlineFlex).toHaveClass('d--inline-flex');
    expect(grid).toHaveClass('d--grid');
    expect(inlineGrid).toHaveClass('d--inline-grid');
    expect(listItem).toHaveClass('d--list-item');
  });
  it('Handles Background Color Props', () => {
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

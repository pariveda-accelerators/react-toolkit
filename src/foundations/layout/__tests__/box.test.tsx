import React from 'react';
import { Box } from 'foundations';
import { render } from '@testing-library/react';
import { BACKGROUND_COLOR } from 'foundations';

describe('Box', () => {
  it('Renders Default', () => {
    const { baseElement } = render(<Box />);
    expect(baseElement).toMatchSnapshot();
  });
  it('Handles Padding Props', () => {
    const { getByText } = render(
      <>
        <Box p0>p0</Box>
        <Box ps>ps</Box>
        <Box pm>pm</Box>
        <Box pl>pl</Box>
      </>
    );
    const p0 = getByText('p0');
    const ps = getByText('ps');
    const pm = getByText('pm');
    const pl = getByText('pl');

    expect(p0).toBeDefined();
    expect(ps).toBeDefined();
    expect(pm).toBeDefined();
    expect(pl).toBeDefined();
  });
  it('Handles Margin Props', () => {
    const { getByText } = render(
      <>
        <Box m0>m0</Box>
        <Box ms>ms</Box>
        <Box mm>mm</Box>
        <Box ml>ml</Box>
      </>
    );
    const m0 = getByText('m0');
    const ms = getByText('ms');
    const mm = getByText('mm');
    const ml = getByText('ml');

    expect(m0).toBeDefined();
    expect(ms).toBeDefined();
    expect(mm).toBeDefined();
    expect(ml).toBeDefined();
  });
  it('Handles Display Props', () => {
    const { getByText } = render(
      <>
        <Box none>none</Box>
        <Box block>block</Box>
        <Box inline-block>inline-block</Box>
        <Box flex>flex</Box>
        <Box inline-flex>inline-flex</Box>
        <Box grid>grid</Box>
        <Box inline-grid>inline-grid</Box>
        <Box list-item>list-item</Box>
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

    expect(none).toBeDefined();
    expect(block).toBeDefined();
    expect(inlineBlock).toBeDefined();
    expect(flex).toBeDefined();
    expect(inlineFlex).toBeDefined();
    expect(grid).toBeDefined();
    expect(inlineGrid).toBeDefined();
    expect(listItem).toBeDefined();
  });
  it('Handles Background Color Props', () => {
    const { getByText } = render(
      <>
        {BACKGROUND_COLOR.map(color => (
          <Box key={color} {...{ [color]: true }}>
            {color}
          </Box>
        ))}
      </>
    );
    BACKGROUND_COLOR.forEach(color => {
      const element = getByText(color);
      expect(element).toBeDefined();
    });
  });
});

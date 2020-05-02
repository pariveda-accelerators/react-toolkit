import React from 'react';
import { Flex } from 'foundations';
import { render } from '@testing-library/react';

describe('Flex', () => {
  it('Renders default', () => {
    const { getByText } = render(<Flex>flex</Flex>);
    const flex = getByText('flex');
    expect(flex).toMatchSnapshot();
    expect(flex).toHaveClass('flex', 'pm', 'm0');
  });
  it('Handles direction prop', () => {
    const row = 'direction-row';
    const column = 'direction-column';
    const { getByText } = render(
      <>
        <Flex direction="row">{row}</Flex>
        <Flex direction="column">{column}</Flex>
      </>
    );
    const rowElement = getByText(row);
    const columnElement = getByText(column);

    expect(rowElement).toHaveClass('row');
    expect(columnElement).toHaveClass('column');
  });
  it('Handles display props', () => {
    const { getByText } = render(
      <>
        <Flex d="none">none</Flex>
        <Flex d="flex">flex</Flex>
        <Flex d="inline-flex">inline-flex</Flex>
      </>
    );
    const none = getByText('none');
    const flex = getByText('flex');
    const inlineFlex = getByText('inline-flex');

    expect(none).toHaveClass('none');
    expect(flex).toHaveClass('flex');
    expect(inlineFlex).toHaveClass('inline-flex');
  });
});

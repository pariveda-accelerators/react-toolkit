import React from 'react';
import { Flex } from 'foundations';
import { render } from '@testing-library/react';

describe('Flex', () => {
  it('Renders Default', () => {
    const { baseElement } = render(<Flex>children</Flex>);
    expect(baseElement).toMatchSnapshot();
  });
});

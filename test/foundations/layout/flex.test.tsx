import React from 'react';
import { render } from '@testing-library/react';
import { renderAndTestProps } from '../../../src/utilities/testing-utils';
import {
  FLEX_DISPLAY,
  FLEX_DIRECTION,
  FLEX_ALIGN,
  JUSTIFY_CONTENT,
  FLEX,
  Flex,
  Row,
  Column,
} from '../../../src/foundations';

describe('Flex', () => {
  it('Renders default', () => {
    const { getByText } = render(<Flex>flex</Flex>);
    const flex = getByText('flex');
    expect(flex).toMatchSnapshot();
    expect(flex).toHaveClass('flex', 'pm', 'm0');
  });
  it('Handles direction props', () => {
    renderAndTestProps(Flex, FLEX_DIRECTION, 'direction');
  });
  it('Handles display props', () => {
    renderAndTestProps(Flex, FLEX_DISPLAY, 'd');
  });
  it('Renders Row variation', () => {
    const row = 'row';
    const dotRow = 'dotrow';
    const { getByText } = render(
      <>
        <Row>{row}</Row>
        <Flex.Row>{dotRow}</Flex.Row>
      </>
    );
    const rowElement = getByText(row);
    const dotRowElement = getByText(row);
    expect(rowElement).toHaveClass('flex', 'row');
    expect(dotRowElement).toHaveClass('flex', 'row');
  });
  it('Renders Column variation', () => {
    const col = 'col';
    const dotColumn = 'dotcol';
    const { getByText } = render(
      <>
        <Column>{col}</Column>
        <Flex.Column>{dotColumn}</Flex.Column>
      </>
    );
    const colElement = getByText(col);
    const dotColumnElement = getByText(col);
    expect(colElement).toHaveClass('flex', 'column');
    expect(dotColumnElement).toHaveClass('flex', 'column');
  });
  it('Handles align self props', () => {
    renderAndTestProps(Flex, FLEX_ALIGN, 'alignSelf', 'flex--as-');
  });
  it('Handles align items props', () => {
    renderAndTestProps(Flex, FLEX_ALIGN, 'alignItems', 'flex--ai-');
  });
  it('Handles justify content props', () => {
    renderAndTestProps(Flex, JUSTIFY_CONTENT, 'justifyContent', 'flex--jc-');
  });
  it('Handles flex props', () => {
    renderAndTestProps(Flex, FLEX, 'flex');
  });
});

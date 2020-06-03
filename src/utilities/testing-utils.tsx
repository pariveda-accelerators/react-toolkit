import React from 'react';
import { render } from '@testing-library/react';

export const renderAndTestProps = (
  Component: React.ComponentType,
  propValues: readonly string[],
  propName: string,
  classNamePrefix?: string
) => {
  const { getByText, baseElement } = render(
    <>
      {propValues.map(value => {
        const props = {
          [propName]: value,
        };
        return (
          <Component key={value} {...props}>
            {value}
          </Component>
        );
      })}
    </>
  );
  propValues.forEach(value => {
    const className = `${classNamePrefix || ''}${value}`;
    expect(getByText(value)).toHaveClass(className);
  });
  expect(baseElement).toMatchSnapshot();
};

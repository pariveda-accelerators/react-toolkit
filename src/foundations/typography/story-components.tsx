import React from 'react';
import { Fonts } from '.';
import { Flex } from 'foundations/layout';

export const Typography = () => (
  <Flex column>
    {Object.keys(Fonts).map(font => {
      const Component = Fonts[font];
      return <Component key={font}>{font}</Component>;
    })}
  </Flex>
);

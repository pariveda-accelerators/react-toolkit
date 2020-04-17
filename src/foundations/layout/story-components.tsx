import React from 'react';
import { Flex } from 'foundations/layout';
import { Fonts } from 'foundations/typography';

const bgColor = {
  bgColor: {
    color: 'grey',
    shade: '2',
  },
} as const;

export const Layout = () => (
  <Flex column>
    <Flex {...bgColor} />
    <Flex p0 m0 {...bgColor}>
      p0 + m0
    </Flex>
    <Flex ps ms {...bgColor}>
      ps + ms
    </Flex>
    <Flex pm mm {...bgColor}>
      pm + mm
    </Flex>
    <Flex pl ml {...bgColor}>
      pl + ml
    </Flex>
  </Flex>
);

export const Test = () => (
  <Flex>
    <Flex column>
      <Flex>
        <Fonts.Body>Link 1</Fonts.Body>
      </Flex>
    </Flex>
    <Flex column></Flex>
  </Flex>
);

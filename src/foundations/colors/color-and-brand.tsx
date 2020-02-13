import * as React from 'react';
import { Flex, Heading, ColorSlice, Body, Subheading, Button } from './components';

export const ColorAndBrand = () => (
  <Flex column center>
    <Heading bold>Complimentary Colors</Heading>
    <Flex stretch>
      <ColorSlice color="color-1-4" height={64} />
      <ColorSlice color="color-7-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-2-4" height={64} />
      <ColorSlice color="color-8-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-3-4" height={64} />
      <ColorSlice color="color-9-4" height={64} />
    </Flex>
    <Heading bold>Analogous Colors</Heading>
    <Flex stretch>
      <ColorSlice color="color-1-4" height={64} />
      <ColorSlice color="color-2-4" height={64} />
      <ColorSlice color="color-3-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-6-4" height={64} />
      <ColorSlice color="color-7-4" height={64} />
      <ColorSlice color="color-8-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-10-4" height={64} />
      <ColorSlice color="color-11-4" height={64} />
      <ColorSlice color="color-12-4" height={64} />
    </Flex>
    <Heading bold>Triadic Colors</Heading>
    <Flex stretch>
      <ColorSlice color="color-1-4" height={64} />
      <ColorSlice color="color-5-4" height={64} />
      <ColorSlice color="color-9-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-2-4" height={64} />
      <ColorSlice color="color-6-4" height={64} />
      <ColorSlice color="color-10-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-4-4" height={64} />
      <ColorSlice color="color-8-4" height={64} />
      <ColorSlice color="color-12-4" height={64} />
    </Flex>
    <Heading bold>Split Complementary Colors</Heading>
    <Flex stretch>
      <ColorSlice color="color-1-4" height={64} />
      <ColorSlice color="color-6-4" height={64} />
      <ColorSlice color="color-8-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-2-4" height={64} />
      <ColorSlice color="color-7-4" height={64} />
      <ColorSlice color="color-9-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-3-4" height={64} />
      <ColorSlice color="color-8-4" height={64} />
      <ColorSlice color="color-10-4" height={64} />
    </Flex>
    <Heading bold>Tetradic Colors</Heading>
    <Flex stretch>
      <ColorSlice color="color-1-4" height={64} />
      <ColorSlice color="color-7-4" height={64} />
      <ColorSlice color="color-5-4" height={64} />
      <ColorSlice color="color-11-4" height={64} />
    </Flex>
    <Flex stretch>
      <ColorSlice color="color-3-4" height={64} />
      <ColorSlice color="color-9-4" height={64} />
      <ColorSlice color="color-5-4" height={64} />
      <ColorSlice color="color-11-4" height={64} />
    </Flex>
  </Flex>
);

const brands = [
  {
    primary: 'color-1-4',
    secondary: 'color-2-4',
    tertiary: 'color-3-4',
  },
  {
    primary: 'color-6-4',
    secondary: 'color-7-4',
    tertiary: 'color-8-4',
  },
  {
    primary: 'color-10-4',
    secondary: 'color-11-4',
    tertiary: 'color-12-4',
  },
  {
    primary: 'color-1-4',
    secondary: 'color-5-4',
    tertiary: 'color-9-4',
  },
  {
    primary: 'color-2-4',
    secondary: 'color-6-4',
    tertiary: 'color-10-4',
  },
  {
    primary: 'color-4-4',
    secondary: 'color-8-4',
    tertiary: 'color-12-4',
  },
  {
    primary: 'color-1-4',
    secondary: 'color-6-4',
    tertiary: 'color-8-4',
  },
  {
    primary: 'color-2-4',
    secondary: 'color-7-4',
    tertiary: 'color-9-4',
  },
  {
    primary: 'color-3-4',
    secondary: 'color-8-4',
    tertiary: 'color-10-4',
  },
];

export const BrandThemeDemo = () => {
  const brand = brands[0];
  return (
    <Flex column>
      <Flex stretch color={brand.primary} padding={16}>
        <Heading color="white">Big important banner message</Heading>
      </Flex>
      <Flex stretch padding={16}>
        <Flex column color={brand.secondary}>
          <Subheading>Card with stuff</Subheading>
          <Body>This is some bacon ipsum action coming right at you</Body>
          <Flex />
          <Button color={brand.tertiary}>Learn More</Button>
        </Flex>
        <Flex />
        <Flex column color={brand.secondary}>
          <Subheading>Card with stuff</Subheading>
          <Body>This is some bacon ipsum action coming right at you</Body>
          <Flex />
          <Button color={brand.tertiary}>Learn More</Button>
        </Flex>
        <Flex />
        <Flex column color={brand.secondary}>
          <Subheading>Card with stuff</Subheading>
          <Body>This is some bacon ipsum action coming right at you</Body>
          <Flex />
          <Button color={brand.tertiary}>Learn More</Button>
        </Flex>
      </Flex>
      <Flex stretch color={brand.primary} padding={16}>
        <Subheading color="white">Footer with some stuff in it</Subheading>
      </Flex>
    </Flex>
  );
};

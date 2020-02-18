import * as React from 'react';
import { Flex, Heading } from './components';

export const ColorTheoryPhysical = () => (
  <Flex column center>
    <Heading bold>Primary Colors</Heading>
    <Flex stretch>
      <Flex color="#FF0000" height={128} />
      <Flex shrink />
      <Flex color="#FFFF00" height={128} />
      <Flex shrink />
      <Flex color="#0000FF" height={128} />
    </Flex>
    <Heading bold>Secondary Colors</Heading>
    <Flex stretch>
      <Flex color="#FF8000" height={128} />
      <Flex shrink />
      <Flex color="#00FF00" height={128} />
      <Flex shrink />
      <Flex color="#8000FF" height={128} />
    </Flex>
    <Heading bold>Tertiary Colors</Heading>
    <Flex stretch>
      <Flex color="#E34234" height={128} />
      <Flex shrink />
      <Flex color="#FFBF00" height={128} />
      <Flex shrink />
      <Flex color="#80FF00" height={128} />
      <Flex shrink />
      <Flex color="#008080" height={128} />
      <Flex shrink />
      <Flex color="#EE82ee" height={128} />
      <Flex shrink />
      <Flex color="#FF00FF" height={128} />
    </Flex>
    <Heading bold>RYB Color Rainbow</Heading>
    <Flex stretch>
      <Flex color="#FF0000" height={128} />
      <Flex color="#E34234" height={128} />
      <Flex color="#FF8000" height={128} />
      <Flex color="#FFBF00" height={128} />
      <Flex color="#FFFF00" height={128} />
      <Flex color="#80FF00" height={128} />
      <Flex color="#00FF00" height={128} />
      <Flex color="#008080" height={128} />
      <Flex color="#0000FF" height={128} />
      <Flex color="#8000FF" height={128} />
      <Flex color="#EE82ee" height={128} />
      <Flex color="#FF00FF" height={128} />
      <Flex color="#FF0000" height={128} />
    </Flex>
  </Flex>
);

export const ColorTheoryDigital = () => (
  <Flex column center>
    <Heading bold>Primary Colors</Heading>
    <Flex stretch>
      <Flex color="#FF0000" height={128} />
      <Flex shrink />
      <Flex color="#00FF00" height={128} />
      <Flex shrink />
      <Flex color="#0000FF" height={128} />
    </Flex>
    <Heading bold>Secondary Colors</Heading>
    <Flex stretch>
      <Flex color="#00FFFF" height={128} />
      <Flex shrink />
      <Flex color="#FFFF00" height={128} />
      <Flex shrink />
      <Flex color="#FF00FF" height={128} />
    </Flex>
    <Heading bold>Tertiary Colors</Heading>
    <Flex stretch>
      <Flex color="#FF8000" height={128} />
      <Flex shrink />
      <Flex color="#80FF00" height={128} />
      <Flex shrink />
      <Flex color="#00FF80" height={128} />
      <Flex shrink />
      <Flex color="#0080FF" height={128} />
      <Flex shrink />
      <Flex color="#8000FF" height={128} />
      <Flex shrink />
      <Flex color="#FF0080" height={128} />
    </Flex>
    <Heading bold>RGB Color Rainbow</Heading>
    <Flex stretch>
      <Flex color="#FF0000" height={128} />
      <Flex color="#FF8000" height={128} />
      <Flex color="#FFFF00" height={128} />
      <Flex color="#80FF00" height={128} />
      <Flex color="#00FF00" height={128} />
      <Flex color="#00FF80" height={128} />
      <Flex color="#00FFFF" height={128} />
      <Flex color="#0080FF" height={128} />
      <Flex color="#0000FF" height={128} />
      <Flex color="#8000FF" height={128} />
      <Flex color="#FF00FF" height={128} />
      <Flex color="#FF0080" height={128} />
      <Flex color="#FF0000" height={128} />
    </Flex>
  </Flex>
);

export const PhysicalVersusDigital = () => (
  <Flex column center>
    <Heading bold>RYB</Heading>
    <Flex shrink />
    <Flex stretch>
      <Flex color="#FF0000" height={128} />
      <Flex color="#E34234" height={128} />
      <Flex color="#FF8000" height={128} />
      <Flex color="#FFBF00" height={128} />
      <Flex color="#FFFF00" height={128} />
      <Flex color="#80FF00" height={128} />
      <Flex color="#00FF00" height={128} />
      <Flex color="#008080" height={128} />
      <Flex color="#0000FF" height={128} />
      <Flex color="#8000FF" height={128} />
      <Flex color="#EE82ee" height={128} />
      <Flex color="#FF00FF" height={128} />
      <Flex color="#FF0000" height={128} />
    </Flex>
    <Flex stretch>
      <Flex color="#FF0000" height={128} />
      <Flex color="#FF8000" height={128} />
      <Flex color="#FFFF00" height={128} />
      <Flex color="#80FF00" height={128} />
      <Flex color="#00FF00" height={128} />
      <Flex color="#00FF80" height={128} />
      <Flex color="#00FFFF" height={128} />
      <Flex color="#0080FF" height={128} />
      <Flex color="#0000FF" height={128} />
      <Flex color="#8000FF" height={128} />
      <Flex color="#FF00FF" height={128} />
      <Flex color="#FF0080" height={128} />
      <Flex color="#FF0000" height={128} />
    </Flex>
    <Heading bold>RGB</Heading>
  </Flex>
);

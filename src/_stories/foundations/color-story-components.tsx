import React from 'react';
import { COLOR, Box, Column, Row } from '../../foundations';
import { Story, ColorStack, TRenderColorShade } from '../story-components';

const renderColorShade: TRenderColorShade = ({ colorShade }) => (
  <Box bg={colorShade} />
);

export const Colors = () => {
  return (
    <Story title="Colors">
      <Column>
        {COLOR.slice(3).map(color => (
          <Row key={color} p="s">
            <ColorStack
              color={color}
              propName="bg"
              renderColorShade={renderColorShade}
              separateHeadingFromContent
            />
          </Row>
        ))}
      </Column>
    </Story>
  );
};

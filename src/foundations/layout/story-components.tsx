import React from 'react';
import { Box as Bx } from 'foundations/layout';
import { Fonts } from 'foundations/typography';

export const Box = () => (
  <Bx d="block">
    <Fonts.Title>Box</Fonts.Title>
    <Fonts.Subtitle>Configuration</Fonts.Subtitle>
    <Fonts.SectionTitle>Padding</Fonts.SectionTitle>
    <Bx>
      <Bx column p="s">
        <Fonts.Body bold>Values</Fonts.Body>
        <Fonts.Body>p="s"</Fonts.Body>
        <Fonts.Body>p="m"</Fonts.Body>
        <Fonts.Body>p="l"</Fonts.Body>
      </Bx>
      <Bx column p="s">
        <Fonts.Body bold>Effect</Fonts.Body>
        <Fonts.Body>padding: .5em</Fonts.Body>
        <Fonts.Body>padding: 1em</Fonts.Body>
        <Fonts.Body>padding: 2em</Fonts.Body>
      </Bx>
    </Bx>
    <Fonts.SectionTitle>Margin</Fonts.SectionTitle>
    <Fonts.SectionTitle>Background Color</Fonts.SectionTitle>
    <Fonts.SectionTitle>Display</Fonts.SectionTitle>
  </Bx>
);

import React from 'react';
import { Fonts } from '../../foundations';
import { Story, FloatingPropTable } from '../story-components';

const type = {
  display: '',
  title: '',
  subtitle: '',
  'section-title': '',
  'section-subtitle': '',
  'subsection-title': '',
  body: '',
  description: '',
  label: '',
};
const align = {
  left: 'text-align: left;',
  center: 'text-align: center;',
  right: 'text-align: right;',
};
const transform = {
  none: 'text-transform: none;',
  uppercase: 'text-transform: uppercase;',
  lowercase: 'text-transform: lowercase;',
  capitalize: 'text-transform: capitalize;',
};
const weight = {
  bold: '',
  strong: '',
};
const style = {
  italics: '',
  emphasis: '',
};
export const Typography = () => (
  <Story title="Typography">
    <FloatingPropTable
      data={type}
      className="text--"
      propName="Font Types"
      exampleUse="<Fonts.Display>{...}</Fonts.Display>"
    />
    <FloatingPropTable
      data={align}
      className="text--"
      propName="Text Align"
      exampleUse={`align="center"`}
    />
    <FloatingPropTable
      data={transform}
      className="text--"
      propName="Text Transform"
      exampleUse={`transform="uppercase"`}
    />
    <FloatingPropTable
      data={weight}
      propName="Font Weight"
      exampleUse={`weight="bold"`}
    >
      <Fonts.Body>
        Renders text inside <b>bold</b> or <strong>strong</strong> tags
      </Fonts.Body>
    </FloatingPropTable>
    <FloatingPropTable
      data={style}
      propName="Font Style"
      exampleUse={`fStyle="italics"`}
    >
      <Fonts.Body>
        Renders text inside <i>italics</i> or <em>emphasis</em> tags
      </Fonts.Body>
    </FloatingPropTable>
  </Story>
);

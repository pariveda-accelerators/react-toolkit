import React, { FC } from 'react';

export const FONT_TAGS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'label',
  'b',
  'strong',
  'i',
  'em',
];
export const FONT_TYPES = [
  'display',
  'title',
  'subtitle',
  'section title',
  'section subtitle',
  'subsection title',
  'body',
  'description',
  'label',
];
export const FONT_STYLES = ['bold', 'strong', 'italics', 'emphasis'];
export const TEXT_ALIGN = ['left', 'center', 'right'];

export type TFontTag = typeof FONT_TAGS[number];
export type TFontType = typeof FONT_TYPES[number];
export type TFontStyle = typeof FONT_STYLES[number];
export type TTextAlign = typeof TEXT_ALIGN[number];

interface IBaseFont {
  tag: TFontTag;
  type: TFontType;
  style?: TFontStyle;
}

const BaseFont: FC<IBaseFont> = ({ tag, type, children, ...restProps }) => {
  console.log('tag: ', tag);
  console.log('type: ', type);
  console.log('children: ', children);
  console.log('restProps: ', restProps);
  const TagElement = React.createElement(
    tag,
    {
      className: type,
      ...restProps,
    },
    children
  );
  return TagElement;
};

export type TFont = Partial<Pick<IBaseFont, 'tag' | 'style'>>;

export const Display: FC<TFont> = props => (
  <BaseFont tag="h1" {...props} type="display" />
);
export const Title: FC<TFont> = props => (
  <BaseFont tag="h2" {...props} type="title" />
);
export const Subtitle: FC<TFont> = props => (
  <BaseFont tag="h3" {...props} type="subtitle" />
);
export const SectionTitle: FC<TFont> = props => (
  <BaseFont tag="h4" {...props} type="section title" />
);
export const SectionSubtitle: FC<TFont> = props => (
  <BaseFont tag="h5" {...props} type="section subtitle" />
);
export const SubsectionTitle: FC<TFont> = props => (
  <BaseFont tag="h6" {...props} type="subsection title" />
);
export const Body: FC<TFont> = props => <BaseFont tag="p" {...props} type="body" />;

export const Fonts: {
  [key: string]: React.ComponentType;
} = {
  Display,
  Title,
  Subtitle,
  SectionTitle,
  SectionSubtitle,
  SubsectionTitle,
  Body,
};

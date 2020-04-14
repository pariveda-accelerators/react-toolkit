import React, { FC } from 'react';
import { getKeys } from 'utils/key-map';
import classnames from 'classnames';
import { createClassName } from 'utils/create-class-name';

/**
 * Docs on everything you can do w/ fonts: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals
 *
 * Future support is needed for:
 *   * text-overflow
 *   * text-indent
 *   * white-space
 *   * word-break
 */

//#region Font Tag
interface IFontTag {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  p?: boolean;
  label?: boolean;
}
export const FONT_TAG = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label'];
//#endregion Font Tag
//#region Font Type
interface IFontType {
  display?: boolean;
  title?: boolean;
  subtitle?: boolean;
  'section-title'?: boolean;
  'section-subtitle'?: boolean;
  'subsection-title'?: boolean;
  body?: boolean;
  description?: boolean;
}
export const FONT_TYPE = [
  'display',
  'title',
  'subtitle',
  'section-title',
  'section-subtitle',
  'subsection-title',
  'body',
  'description',
  'label',
];
//#endregion Font Type
//#region Font Style
interface IFontStyle {
  bold?: boolean;
  strong?: boolean;
  italics?: boolean;
  emphasis?: boolean;
}
export const FONT_STYLE = ['bold', 'strong', 'italics', 'emphasis'];
const Emphasis: FC<{ children?: React.ReactNode }> = props => <em {...props} />;
const Italics: FC<{ children?: React.ReactNode }> = props => <i {...props} />;
const Strong: FC<{ children?: React.ReactNode }> = props => <strong {...props} />;
const Bold: FC<{ children?: React.ReactNode }> = props => <b {...props} />;
const wrapChildren = (Em: FC, B: FC, children: string) => (
  <Em>
    <B>{children}</B>
  </Em>
);
//#endregion Font Style
//#region Font Align
interface ITextAlign {
  left?: boolean;
  center?: boolean;
  right?: boolean;
}
export const TEXT_ALIGN = ['left', 'center', 'right'];
//#endregion Font Align
//#region Text Transform
interface ITextTransform {
  none?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
}
export const TEXT_TRANSFORM = ['none', 'uppercase', 'lowercase', 'capitalize'];
//#endregion Text Transform

export type anyTag = typeof FONT_TAG[number];
export type anyType = typeof FONT_TYPE[number];
export type anyStyle = typeof FONT_STYLE[number];
export type TTextAlign = typeof TEXT_ALIGN[number];
export type TTextTextTransform = typeof TEXT_TRANSFORM[number];

type TBaseFont = IFontTag & IFontType & IFontStyle & ITextAlign & ITextTransform;

interface IBaseFont extends TBaseFont {
  children: string;
}

const BaseFont: FC<IBaseFont> = ({ children, ...restProps }) => {
  const fontTag = getKeys(restProps, FONT_TAG);
  const tag = Object.keys(fontTag)[0];

  const fontType = getKeys(restProps, FONT_TYPE);
  const type = Object.keys(fontType)[0];

  const { italics, emphasis, bold, strong } = getKeys<IFontStyle>(
    restProps,
    FONT_STYLE
  );
  const Em = italics ? Italics : emphasis ? Emphasis : React.Fragment;
  const B = bold ? Bold : strong ? Strong : React.Fragment;

  const textAlign = getKeys(restProps, TEXT_ALIGN);
  const align = Object.keys(textAlign)[0];

  const textTransform = getKeys(restProps, TEXT_TRANSFORM);
  const transform = Object.keys(textTransform)[0];

  const classNameStyles = {
    align,
    transform,
    type,
  };
  const classes = createClassName(classNameStyles, { block: 'text' });

  const TagElement = React.createElement(
    tag,
    {
      className: classnames(...classes),
      tag,
    },
    wrapChildren(Em, B, children)
  );
  return TagElement;
};

type TFont = Omit<IBaseFont, keyof IFontType>;
export const Display: FC<TFont> = props => <BaseFont display {...props} h1 />;
export const Title: FC<TFont> = props => <BaseFont title {...props} h2 />;
export const Subtitle: FC<TFont> = props => <BaseFont subtitle {...props} h3 />;
export const SectionTitle: FC<TFont> = props => (
  <BaseFont section-title {...props} h4 />
);
export const SectionSubtitle: FC<TFont> = props => (
  <BaseFont section-subtitle {...props} h5 />
);
export const SubsectionTitle: FC<TFont> = props => (
  <BaseFont subsection-title {...props} h6 />
);
export const Body: FC<TFont> = props => <BaseFont body {...props} p />;
export const Description: FC<TFont> = props => <BaseFont description {...props} p />;
export const Label: FC<TFont> = props => <BaseFont body {...props} label />;

export const Fonts: {
  [key: string]: React.ComponentType<TFont>;
} = {
  Display,
  Title,
  Subtitle,
  SectionTitle,
  SectionSubtitle,
  SubsectionTitle,
  Body,
  Description,
  Label,
};

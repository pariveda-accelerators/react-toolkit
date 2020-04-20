import React, { FC } from 'react';
import { getProps } from 'utils/key-map';
import classnames from 'classnames';
import { createClassName } from 'utils/create-class-name';
import { TBooleanConfigProp } from 'types';

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
export const FONT_TAG = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label'] as const;
export type TFontTag = typeof FONT_TAG[number];
export type TFontTagProp = TBooleanConfigProp<TFontTag>;
//#endregion Font Tag
//#region Font Type
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
] as const;
export type TFontType = typeof FONT_TYPE[number];
export type TFontTypeProp = TBooleanConfigProp<TFontType>;
//#endregion Font Type
//#region Font Style
export const FONT_STYLE = ['bold', 'strong', 'italics', 'emphasis'];
export type TFontStyle = typeof FONT_STYLE[number];
export type TFontStyleProp = TBooleanConfigProp<TFontStyle>;
//#region Style & Accessibility Tags
export interface ChildrenAsReactNode {
  children: React.ReactNode;
}
//#endregion Style & Accessibility Tags
const Emphasis: FC<ChildrenAsReactNode> = props => <em {...props} />;
const Italics: FC<ChildrenAsReactNode> = props => <i {...props} />;
const Strong: FC<ChildrenAsReactNode> = props => <strong {...props} />;
const Bold: FC<ChildrenAsReactNode> = props => <b {...props} />;
const wrapChildren = (
  Em: FC<ChildrenAsReactNode>,
  B: FC<ChildrenAsReactNode>,
  children: string
) => (
  <Em>
    <B>{children}</B>
  </Em>
);
//#endregion Font Style
//#region Font Align
export const TEXT_ALIGN = ['left', 'center', 'right'];
export type TTextAlign = typeof TEXT_ALIGN[number];
export type TTextAlignProp = TBooleanConfigProp<TTextAlign>;
//#endregion Font Align
//#region Text Transform
export const TEXT_TRANSFORM = ['none', 'uppercase', 'lowercase', 'capitalize'];
export type TTextTransform = typeof FONT_TYPE[number];
export type TTextTransformProp = TBooleanConfigProp<TTextTransform>;
//#endregion Text Transform

type TBaseFont = TFontTagProp &
  TFontTypeProp &
  TFontStyleProp &
  TTextAlignProp &
  TTextTransformProp;

interface IBaseFont extends TBaseFont {
  children: string;
  [key: string]: any;
}

const BaseFont: FC<IBaseFont> = ({ children, ...restProps }) => {
  const fontTag = getProps(restProps, FONT_TAG);
  const tag = Object.keys(fontTag)[0];

  const fontType = getProps(restProps, FONT_TYPE);
  const type = Object.keys(fontType)[0];

  const { italics, emphasis, bold, strong } = getProps<TFontStyleProp>(
    restProps,
    FONT_STYLE
  );
  const Em = italics ? Italics : emphasis ? Emphasis : React.Fragment;
  const B = bold ? Bold : strong ? Strong : React.Fragment;

  const textAlign = getProps(restProps, TEXT_ALIGN);
  const align = Object.keys(textAlign)[0];

  const textTransform = getProps(restProps, TEXT_TRANSFORM);
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

type TFont = Exclude<IBaseFont, keyof TFontTypeProp>;
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

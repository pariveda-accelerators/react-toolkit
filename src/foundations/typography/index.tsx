import React, { FC } from 'react';
import classnames from 'classnames';
import { createClassName } from '../../utilities';
import { IDefaultProps, getDefaultProps } from '../../types';

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
//#endregion Font Type
//#region Font Weight
export const FONT_WEIGHT = ['normal', 'light', 'bold', 'strong'];
export type TFontWeight = typeof FONT_WEIGHT[number];
//#endregion Font Weight
//#region Font Style
export const FONT_STYLE = ['italics', 'emphasis'];
export type TFontStyle = typeof FONT_WEIGHT[number];
//#endregion Font Style
//#region Style & Accessibility Tags
export interface ChildrenAsReactNode {
  children: React.ReactNode;
}
const Emphasis: FC<ChildrenAsReactNode> = props => <em {...props} />;
const Italics: FC<ChildrenAsReactNode> = props => <i {...props} />;
const Strong: FC<ChildrenAsReactNode> = props => <strong {...props} />;
const Bold: FC<ChildrenAsReactNode> = props => <b {...props} />;
const wrapChildren = (
  Em: FC<ChildrenAsReactNode>,
  B: FC<ChildrenAsReactNode>,
  children: React.ReactNode
) => (
  <Em>
    <B>{children}</B>
  </Em>
);
//#endregion Style & Accessibility Tags
//#region Font Align
export const TEXT_ALIGN = ['left', 'center', 'right'];
export type TTextAlign = typeof TEXT_ALIGN[number];
//#endregion Font Align
//#region Text Transform
export const TEXT_TRANSFORM = ['none', 'uppercase', 'lowercase', 'capitalize'];
export type TTextTransform = typeof TEXT_TRANSFORM[number];
//#endregion Text Transform

interface IBaseFont extends IDefaultProps {
  tag?: TFontTag;
  type?: TFontType;
  weight?: TFontWeight;
  fStyle?: TFontStyle;
  align?: TTextAlign;
  transform?: TTextTransform;
}

const BaseFont: FC<IBaseFont> = ({
  tag,
  type,
  weight,
  fStyle,
  align,
  transform,
  children,
  ...props
}) => {
  const defaultProps = getDefaultProps(props);
  const Em =
    fStyle === 'italics'
      ? Italics
      : fStyle === 'emphasis'
      ? Emphasis
      : React.Fragment;
  const B = weight === 'bold' ? Bold : weight === 'strong' ? Strong : React.Fragment;

  const classNameStyles = {
    align,
    transform,
    type,
  };
  const classes = createClassName(classNameStyles, { block: 'text' });

  const TagElement = React.createElement(
    tag || 'p',
    {
      className: classnames(...classes),
      tag,
      ...defaultProps,
    },
    wrapChildren(Em, B, children)
  );
  return TagElement;
};
BaseFont.defaultProps = {
  tag: 'p',
  type: 'body',
  weight: '',
  fStyle: '',
  align: '',
  transform: '',
};

type TFont = Omit<IBaseFont, 'type'>;
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
  <BaseFont tag="h4" {...props} type="section-title" />
);
export const SectionSubtitle: FC<TFont> = props => (
  <BaseFont tag="h5" {...props} type="section-subtitle" />
);
export const SubsectionTitle: FC<TFont> = props => (
  <BaseFont tag="h6" {...props} type="subsection-title" />
);
export const Body: FC<TFont> = props => <BaseFont tag="p" {...props} type="body" />;
export const Description: FC<TFont> = props => (
  <BaseFont tag="p" {...props} type="description" />
);
export const Label: FC<TFont> = props => (
  <BaseFont tag="label" {...props} type="body" />
);

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

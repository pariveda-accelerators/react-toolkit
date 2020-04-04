import React, { FC } from 'react';
import { getKeys } from 'utils/key-map';

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
  b?: boolean;
  strong?: boolean;
  i?: boolean;
  em?: boolean;
}
export const FONT_TAG = [
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
  label?: boolean;
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
//#endregion Font Style
//#region Font Align
interface IFontAlign {
  left?: boolean;
  center?: boolean;
  right?: boolean;
}
export const FONT_ALIGN = ['left', 'center', 'right'];
//#endregion Font Align

export type anyTag = typeof FONT_TAG[number];
export type anyType = typeof FONT_TYPE[number];
export type anyStyle = typeof FONT_STYLE[number];
export type TTextAlign = typeof FONT_ALIGN[number];

type TBaseFont = IFontTag & IFontType & IFontStyle & IFontAlign;

const BaseFont: FC<TBaseFont> = ({ children, ...restProps }) => {
  const fontTag = getKeys(restProps, FONT_TAG);
  const tag = Object.keys(fontTag)[0];

  const fontType = getKeys(restProps, FONT_TYPE);
  const type = Object.keys(fontType)[0];

  // const fontStyle = getKeys(restProps, FONT_TYPE);
  // const style = Object.keys(fontStyle)[0];

  // const fontAlign = getKeys(restProps, FONT_TYPE);
  // const align = Object.keys(fontAlign)[0];

  const TagElement = React.createElement(
    tag || 'p',
    {
      className: type,
      tag,
    },
    children
  );
  return TagElement;
};

type TFont = Omit<TBaseFont, keyof IFontType>;
export const Display: FC<TFont> = (props) => <BaseFont display {...props} h1 />;
export const Title: FC<TFont> = (props) => <BaseFont title {...props} h2 />;
export const Subtitle: FC<TFont> = (props) => <BaseFont subtitle {...props} h3 />;
export const SectionTitle: FC<TFont> = (props) => (
  <BaseFont section-title {...props} h4 />
);
export const SectionSubtitle: FC<TFont> = (props) => (
  <BaseFont section-subtitle {...props} h5 />
);
export const Label: FC<TFont> = (props) => (
  <BaseFont subsection-title {...props} h6 />
);
export const Body: FC<TFont> = (props) => <BaseFont body {...props} p />;

export const Description: FC<TFont> = (props) => (
  <BaseFont description {...props} p />
);

export const Fonts: {
  [key: string]: React.ComponentType<TFont>;
} = {
  Display,
  Title,
  Subtitle,
  SectionTitle,
  SectionSubtitle,
  Label,
  Body,
  Description,
};

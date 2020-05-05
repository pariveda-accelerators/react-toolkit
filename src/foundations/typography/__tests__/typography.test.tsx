import React from 'react';
import { Fonts } from 'foundations';
import { render } from '@testing-library/react';

describe('Typography', () => {
  it('Renders Default', () => {
    const { baseElement, getByText } = render(
      <>
        <Fonts.Display>Display Font</Fonts.Display>
        <Fonts.Title>Title Font</Fonts.Title>
        <Fonts.Subtitle>Subtitle Font</Fonts.Subtitle>
        <Fonts.SectionTitle>SectionTitle Font</Fonts.SectionTitle>
        <Fonts.SectionSubtitle>Section Subtitle Font</Fonts.SectionSubtitle>
        <Fonts.SubsectionTitle>Subsection Title Font</Fonts.SubsectionTitle>
        <Fonts.Body>Body Font</Fonts.Body>
        <Fonts.Description>Description Font</Fonts.Description>
        <Fonts.Label>Label Font</Fonts.Label>
      </>
    );

    const display = getByText('Display Font');
    const title = getByText('Title Font');
    const subtitle = getByText('Subtitle Font');
    const sectionTitle = getByText('SectionTitle Font');
    const section = getByText('Section Subtitle Font');
    const subsectionTitle = getByText('Subsection Title Font');
    const body = getByText('Body Font');
    const description = getByText('Description Font');
    const label = getByText('Label Font');

    expect(baseElement).toMatchSnapshot();
    expect(display.tagName).toBe('H1');
    expect(display).toHaveClass('text--display');
    expect(title.tagName).toBe('H2');
    expect(title).toHaveClass('text--title');
    expect(subtitle.tagName).toBe('H3');
    expect(subtitle).toHaveClass('text--subtitle');
    expect(sectionTitle.tagName).toBe('H4');
    expect(sectionTitle).toHaveClass('text--section-title');
    expect(section.tagName).toBe('H5');
    expect(section).toHaveClass('text--section-subtitle');
    expect(subsectionTitle.tagName).toBe('H6');
    expect(subsectionTitle).toHaveClass('text--subsection-title');
    expect(body.tagName).toBe('P');
    expect(body).toHaveClass('text--body');
    expect(description.tagName).toBe('P');
    expect(description).toHaveClass('text--description');
    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveClass('text--body');
  });

  it('Handles Tag', () => {
    const { baseElement, getByText } = render(
      <>
        <Fonts.Display tag="h1">H1 Tag</Fonts.Display>
        <Fonts.Display tag="h2">H2 Tag</Fonts.Display>
        <Fonts.Display tag="h3">H3 Tag</Fonts.Display>
        <Fonts.Display tag="h4">H4 Tag</Fonts.Display>
        <Fonts.Display tag="h5">H5 Tag</Fonts.Display>
        <Fonts.Display tag="h6">H6 Tag</Fonts.Display>
        <Fonts.Display tag="p">P Tag</Fonts.Display>
      </>
    );

    expect(baseElement).toMatchSnapshot();
    expect(getByText('H1 Tag').tagName).toBe('H1');
    expect(getByText('H2 Tag').tagName).toBe('H2');
    expect(getByText('H3 Tag').tagName).toBe('H3');
    expect(getByText('H4 Tag').tagName).toBe('H4');
    expect(getByText('H5 Tag').tagName).toBe('H5');
    expect(getByText('H6 Tag').tagName).toBe('H6');
    expect(getByText('P Tag').tagName).toBe('P');
  });

  it('Handles Emphasis', () => {
    const { baseElement } = render(
      <Fonts.Display fStyle="emphasis">Emphasis Display Font</Fonts.Display>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Handles Italics', () => {
    const { baseElement } = render(
      <Fonts.Display fStyle="italics">Italics Display Font</Fonts.Display>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Handles Strong', () => {
    const { baseElement } = render(
      <Fonts.Display weight="strong">Strong Display Font</Fonts.Display>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Handles Bold', () => {
    const { baseElement } = render(
      <Fonts.Display weight="bold">Bold Display Font</Fonts.Display>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Handles Alignment', () => {
    const { getByText } = render(
      <>
        <Fonts.Display align="left">Left Align</Fonts.Display>
        <Fonts.Display align="center">Center Align</Fonts.Display>
        <Fonts.Display align="right">Right Align</Fonts.Display>
      </>
    );

    expect(getByText('Left Align')).toHaveClass('text--left');
    expect(getByText('Center Align')).toHaveClass('text--center');
    expect(getByText('Right Align')).toHaveClass('text--right');
  });
  it('Handles Transform', () => {
    const { getByText } = render(
      <>
        <Fonts.Display transform="none">NoNe</Fonts.Display>
        <Fonts.Display transform="uppercase">uppercase</Fonts.Display>
        <Fonts.Display transform="lowercase">LOWERCASE</Fonts.Display>
        <Fonts.Display transform="capitalize">first letters only</Fonts.Display>
      </>
    );

    expect(getByText('NoNe')).toHaveClass('text--none');
    expect(getByText('uppercase')).toHaveClass('text--uppercase');
    expect(getByText('LOWERCASE')).toHaveClass('text--lowercase');
    expect(getByText('first letters only')).toHaveClass('text--capitalize');
  });
  it('Handles Margin', () => {
    const { getByText } = render(
      <>
        <Fonts.Display m="0">m0</Fonts.Display>
        <Fonts.Display m="s">ms</Fonts.Display>
        <Fonts.Display m="m">mm</Fonts.Display>
        <Fonts.Display m="l">ml</Fonts.Display>
      </>
    );

    expect(getByText('m0')).toHaveClass('m0');
    expect(getByText('ms')).toHaveClass('ms');
    expect(getByText('mm')).toHaveClass('mm');
    expect(getByText('ml')).toHaveClass('ml');
  });
});

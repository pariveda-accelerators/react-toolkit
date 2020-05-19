import React from 'react';
import { Fonts } from 'foundations';
import { render } from '@testing-library/react';
import { renderAndTestProps } from '../../../utilities';
import { TEXT_ALIGN, TEXT_TRANSFORM } from '..';
import { SHIRT_SIZE } from 'foundations/layout/box';

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
    renderAndTestProps(Fonts.Display, TEXT_ALIGN, 'align', 'text--');
  });
  it('Handles Transform', () => {
    renderAndTestProps(Fonts.Display, TEXT_TRANSFORM, 'transform', 'text--');
  });
  it('Handles Margin', () => {
    renderAndTestProps(Fonts.Display, SHIRT_SIZE, 'm', 'm');
  });
});

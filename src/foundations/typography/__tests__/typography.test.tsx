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
        <Fonts.Body>Body Font</Fonts.Body>
        <Fonts.Description>Description Font</Fonts.Description>
        <Fonts.Label>Label Font</Fonts.Label>
      </>
    );

    expect(baseElement).toMatchSnapshot();
    expect(getByText('Display Font').tagName).toBe('H1');
    expect(getByText('Title Font').tagName).toBe('H2');
    expect(getByText('Subtitle Font').tagName).toBe('H3');
    expect(getByText('SectionTitle Font').tagName).toBe('H4');
    expect(getByText('Section Subtitle Font').tagName).toBe('H5');
    expect(getByText('Body Font').tagName).toBe('P');
    expect(getByText('Description Font').tagName).toBe('P');
    expect(getByText('Label Font').tagName).toBe('H6');
  });

  it('Handles Tag', () => {
    const { baseElement, getByText } = render(
      <>
        <Fonts.Display h1>H1 Tag</Fonts.Display>
        <Fonts.Display h2>H2 Tag</Fonts.Display>
        <Fonts.Display h3>H3 Tag</Fonts.Display>
        <Fonts.Display h4>H4 Tag</Fonts.Display>
        <Fonts.Display h5>H5 Tag</Fonts.Display>
        <Fonts.Display h6>H6 Tag</Fonts.Display>
        <Fonts.Display p>P Tag</Fonts.Display>
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
      <Fonts.Display emphasis>Emphasis Display Font</Fonts.Display>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Handles Italics', () => {
    const { baseElement } = render(
      <Fonts.Display italics>Italics Display Font</Fonts.Display>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Handles Strong', () => {
    const { baseElement } = render(
      <Fonts.Display strong>Strong Display Font</Fonts.Display>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Handles Bold', () => {
    const { baseElement } = render(
      <Fonts.Display bold>Bold Display Font</Fonts.Display>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('Handles Alignment', () => {
    const { getByText } = render(
      <>
        <Fonts.Display left>Left Align</Fonts.Display>
        <Fonts.Display center>Center Align</Fonts.Display>
        <Fonts.Display right>Right Align</Fonts.Display>
      </>
    );

    expect(getByText('Left Align')).toHaveClass('text--left');
    expect(getByText('Center Align')).toHaveClass('text--center');
    expect(getByText('Right Align')).toHaveClass('text--right');
  });
  it('Handles Transform', () => {
    const { getByText } = render(
      <>
        <Fonts.Display none>NoNe</Fonts.Display>
        <Fonts.Display uppercase>uppercase</Fonts.Display>
        <Fonts.Display lowercase>LOWERCASE</Fonts.Display>
        <Fonts.Display capitalize>first letters only</Fonts.Display>
      </>
    );

    expect(getByText('NoNe')).toHaveClass('text--none');
    expect(getByText('uppercase')).toHaveClass('text--uppercase');
    expect(getByText('LOWERCASE')).toHaveClass('text--lowercase');
    expect(getByText('first letters only')).toHaveClass('text--capitalize');
  });
});

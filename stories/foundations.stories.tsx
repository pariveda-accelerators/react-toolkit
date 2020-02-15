import React from 'react';
import {
  SassPalette,
  ColorTheoryDigital,
  ColorTheoryPhysical,
  PhysicalVersusDigital,
  UnderstandingHex,
  MixingRGB,
  Terminology,
  ColorAndBrand,
  BrandThemeDemo,
  Colors,
} from '../src/foundations/colors';

export default {
  title: 'Foundations',
};

export const colors = () => <Colors />;

export const colorTheoryPhysical = () => <ColorTheoryPhysical />;
colorTheoryPhysical.story = {
  name: 'Color in the Physical World',
};
export const colorTheoryDigital = () => <ColorTheoryDigital />;
colorTheoryDigital.story = {
  name: 'Color in the Digital World',
};
export const physicalVsDigital = () => <PhysicalVersusDigital />;
physicalVsDigital.story = {
  name: 'Physical v Digital',
};
export const understandingHex = () => <UnderstandingHex />;
understandingHex.story = {
  name: 'Hex Basics',
};
export const terminology = () => <Terminology />;
terminology.story = {
  name: 'One Last Thing',
};
export const mixingRGB = () => <MixingRGB />;
mixingRGB.story = {
  name: 'Hex Magic',
};
export const sassPalette = () => <SassPalette />;
sassPalette.story = {
  name: "Let's get Sassy",
};
export const colorAndBrand = () => <ColorAndBrand />;
colorAndBrand.story = {
  name: 'Creating a Brand Identity',
};
export const brandTheming = () => <BrandThemeDemo />;
brandTheming.story = {
  name: 'Applying Brand Colors to a Theme',
};

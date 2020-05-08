import { configure } from '@storybook/react';
import { addons } from '@storybook/addons';
import '../dist/main.css';
import './custom.css';

addons.setConfig({
  showPanel: false,
});

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /stories\.(js|ts)x?$/), module);

const StyleDictionary = require('style-dictionary').extend(
  './style-dictionary/config.json'
);

StyleDictionary.registerTransform({
  name: 'value/number',
  type: 'value',
  transformer: prop => {
    if (typeof prop.original.value) {
      return prop.original.value;
    }
    return prop.value;
  },
});

StyleDictionary.registerTransformGroup({
  name: 'scss',
  transforms: ['value/number'],
});
StyleDictionary.registerTransformGroup({
  name: 'css',
  transforms: ['value/number'],
});

StyleDictionary.buildAllPlatforms();

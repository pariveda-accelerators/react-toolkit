module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ts', '.tsx'],
        root: './',
        alias: {
          src: './src',
        },
      },
    ],
  ],
};

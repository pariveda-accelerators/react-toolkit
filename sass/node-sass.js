const sass = require('node-sass');
const fs = require('fs');
const chromatic = require('chromatic-sass');
const outFile = 'dist/main.css';

sass.render(
  {
    file: './sass/main.scss',
    outFile: outFile,
    sourceMap: true,
    outputStyle: 'compressed',
    functions: chromatic,
  },
  function(error, result) {
    if (!error) {
      fs.writeFile(outFile, result.css, function(err) {
        if (!err) {
          console.log('done!');
        } else {
          console.log('sass compiled ok but writing to file failed');
        }
      });
    } else {
      console.log(error);
    }
  }
);

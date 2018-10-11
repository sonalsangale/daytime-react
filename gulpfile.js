// -------------------------------------
//
//   Gulpfile
//
// -------------------------------------
//
// Available tasks:
//   `gulp`
//   `gulp build`
//   `gulp build:dev`
//   `gulp clean`
//   `gulp clean:css`
//   `gulp compile:sass`
//   `gulp compress:image`
//   `gulp lint:js`
//   `gulp lint:css`
//   `gulp minify:css`
//   `gulp watch`
//   `gulp watch:js`
//   `gulp watch:sass`
//
// -------------------------------------

// -------------------------------------
//   Modules
// -------------------------------------
//
// gulp-concat       : Concatenate files
// gulp-clean-css    : Minify CSS
// gulp-load-plugins : Automatically load Gulp plugins
// gulp-rename       : Rename files
// gulp-sass         : Compile Sass
// gulp-sass-lint    : Lint Sass
// gulp-watch        : Watch stream
// -------------------------------------

const gulp = require('gulp');

// Load non-gulp plugins.
const plugins = require('gulp-load-plugins')({
  pattern: '*',
  rename: {
    'gulp-sass-glob': 'sassGlob',
    'gulp-sass': 'sass',
    'gulp-plumber': 'plumber'
  },
});

// Define path of source and destination..
const paths = {
  styles: {
    source: './src/',
    destination: './dist/css/',
  },
  scripts: './dist/js/',
  images: './dist/images/',
  compressedImages: './dist/compressed-images/',
};

// Destination paths.
const options = {

  // ----- CSS ----- //

  css: {
    files: `${paths.styles.destination}**/*.css`,
    file: `${paths.styles.destination}/styles.css`,
    destination: paths.styles.destination,
  },

  // ----- Sass ----- //

  sass: {
    files: `${paths.styles.source}**/*.scss`,
    file: `${paths.styles.source}styles.scss`,
    destination: paths.styles.destination,
  },

  // ----- JS ----- //
  js: {
    files: `${paths.scripts}**/*.js`,
    destination: paths.scripts,

  },

  // ----- Images ----- //
  images: {
    files: `${paths.images}**/*.{png,gif,jpg}`,
    destination: paths.compressedImages,
  },

  // ----- eslint ----- //
  jsLinting: {
    files: {
      theme: [
        `${paths.scripts}**/*.js`,
        `!${paths.scripts}**/*.min.js`,
      ],
      gulp: [
        'gulpfile.js',
        'gulp-tasks/**/*',
      ],
    },
  },
  pattern: {
    destination: paths.pattern,
  },
};

// Tasks
require('./gulp-tasks/default')(gulp, plugins, options);
require('./gulp-tasks/build')(gulp, plugins, options);
require('./gulp-tasks/compile-sass')(gulp, plugins, options);
require('./gulp-tasks/minify-css')(gulp, plugins, options);
require('./gulp-tasks/lint-js')(gulp, plugins, options);
require('./gulp-tasks/lint-css')(gulp, plugins, options);
// require('./gulp-tasks/compress-image')(gulp, plugins, options);
require('./gulp-tasks/watch')(gulp, plugins, options);


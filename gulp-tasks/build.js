/**
 * @file
 * Task: Build.
 */

module.exports = function (gulp, plugins) {
  gulp.task('build', [
    'compile:sass',
    // 'compress:image',
    'minify:css',
  ], (cb) => {
  // Run linting last, otherwise its output gets lost.
    // plugins.runSequence(['lint:js'], cb);
  });

  gulp.task('build:dev', [
    'compile:sass',
    // 'compress:image',
    'minify:css',
  ], (cb) => {
    // Run linting last, otherwise its output gets lost.
    // plugins.runSequence(['lint:css'], cb);
  });

  // gulp.task('fe-lint-compile', [
  //   'compile:sass',
  //   'compress:image',
  //   'minify:css',
  // ], (cb) => {
  //   // Run linting last, otherwise its output gets lost.
  //   plugins.runSequence(['lint:js', 'lint:css'], cb);
  // });
};

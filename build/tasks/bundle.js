var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
  force: true,
  packagePath: '.',
  bundles: {
    "dist/app-build": {
      includes: [
        '**/[*.js]',
        '**/*.html!text',
        '**/*.css',
      ],
      excludes: [
        'components/bouncer.js'
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/vendor-build": {
      includes: [
        "aurelia-binding",
        "aurelia-bootstrapper",
        "aurelia-dependency-injection",
        "aurelia-event-aggregator",
        "aurelia-framework",
        "aurelia-history",
        "aurelia-history-browser",
        "aurelia-loader",
        "aurelia-loader-default",
        "aurelia-logging",
        "aurelia-logging-console",
        "aurelia-metadata",
        "aurelia-pal",
        "aurelia-pal-browser",
        "aurelia-path",
        "aurelia-route-recognizer",
        "aurelia-router",
        "aurelia-task-queue",
        "aurelia-templating",
        "aurelia-templating-binding",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "bootstrap",
        "clean-css",
        "css",
        "font-awesome",
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/bouncer": {
      includes: [
        'components/bouncer.js'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

gulp.task('minify', function() {
  return bundler.bundle(minify);
});

gulp.task('bundle', function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});

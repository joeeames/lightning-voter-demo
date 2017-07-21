// Karma configuration
// Generated on Sat Apr 16 2016 16:47:26 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      '../public/vendor/jquery.min.js',
      '../public/vendor/1.5.5/angular.min.js',
      '../public/vendor/1.5.5/angular-route.min.js',
      '../public/vendor/1.5.5/angular-mocks.js',
      '../public/vendor/toastr.min.js',
      '../dist/dev/ng1.js',
      '../test/**/*.js',
      '../public/**/*.html'
    ],
    exclude: [
      '../public/vendor/1.4.9/**/*.js',
      '../public/app/**/*.js',
      '../public/main.js',
      '../public/vendor.js',
      '../public/polyfills.js',
      '../public/index.js',
      '../public/routes.js'
    ],
    preprocessors: {
      '../**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'public'
    },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}

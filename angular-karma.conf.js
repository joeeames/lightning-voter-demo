// Karma configuration
// Generated on Sat Apr 16 2016 16:47:26 GMT-0600 (Mountain Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/core-js/client/shim.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
      
      // Angular itself and the testing library
      {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

      {pattern: 'public/systemjs.config.js', included: false, watched: false},
      {pattern: 'systemjs.config.extras.js', included: false, watched: false},
      'karma-test-shim.js',

      // 'public/vendor/jquery.min.js',
      // 'public/vendor/1.5.5/angular.min.js',
      // 'public/vendor/1.5.5/angular-route.min.js',
      // 'public/vendor/toastr.min.js',
      // 'public/toastr/toastr.js',
      // 'public/app/**/*.js',
      // 'public/**/*.js',
      // 'public/**/*.js',
      // 'test/**/*.js',
      // 'public/**/*.html'
    ],


    // list of files to exclude
    exclude: [
      // 'public/vendor/1.4.9/**/*.js'
    ],


    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

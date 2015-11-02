module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: 'bower_components/**/*.js', included: false},
      {pattern: 'src/**/*.js', including: true},
      {pattern: 'tests/*Spec.js', included: true},
      {pattern: 'tests/**/*Spec.js', included: true}
    ],
    exclude: [
    ],
    preprocessors: {},
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Firefox','chrome_without_security'],
    customLaunchers: {
      chrome without security: {
        base: "Chrome",
        flags: ["--disable-web-security"]
      }
    },
    singleRun: false
  });
};
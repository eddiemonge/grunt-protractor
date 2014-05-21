/*
 * grunt-protractor
 * https://github.com/eddiemonge/grunt-protractor
 *
 * Copyright (c) 2014 Eddie Monge
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var runner = require(require.resolve('protractor/lib/runner.js'));

module.exports = function (grunt) {
  grunt.registerMultiTask('protractor', 'run protractor', function () {
    // Determine Protractor options
    var configFile = {};
    this.data.options = this.data.options || {};
    if ( this.data.options.configFile ) {
      try {
        configFile = require(path.join(
          process.cwd(), this.data.options.configFile
        )).config;
      }
      catch (e) {
        configFile = {};
      }
    }
    var options = grunt.util._.merge(this.data.options, configFile);

    // Only continue if there are tests to run
    if (!options.specs.length) {
      grunt.fail.fatal('Please specify spec files to run.');
    }

    var done = this.async();
    options.onCleanUp = function (exitCode) {
      if (typeof options.onCleanUp === 'function') {
        options.onCleanUp(exitCode);
      }
      done();
    };
    runner.addConfig(options);
    runner.runOnce();
  });
};

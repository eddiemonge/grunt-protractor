#grunt-protractor
A grunt plugin for [protractor](https://github.com/juliemr/protractor)

> Integrating Protractor with Grunt

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-protractor --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-protractor');
```

## The "protractor" task

### Overview
In your project's Gruntfile, add a section named `protractor` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  protractor: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

Any option that is enabled in Protractor can be passed. [Full Set of Options](https://github.com/angular/protractor/blob/master/referenceConf.js)

#### options.configFile
Type: `String`
Default value: `undefined`

A path to a config file (in the Protractor style) relative to the Gruntfile.js for the project. Any options passed in through the Gruntfile will take precendence over the config file options.

### Usage Examples

At the bare minimum, specs have to be passed in. These can be passed in directly in the config option, or specify a config file with them specified there.

```js
grunt.initConfig({
  protractor: {
    local: {
      options: {
        specs: ['test/integration/**.js', 'test/e2e/**.js'],
      }
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
See the [Changelog](/CHANGELOG.md)

## License
Copyright (c) 2014 Eddie Monge. Licensed under the MIT license.

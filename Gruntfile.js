'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      dist: {
        options: {
          jshintrc: true
        },
        src: [
          'Gruntfile.js',
          'tasks/**/*.js',
          'tests/**/*.js'
        ]
      }
    },
    nodeunit: {
      all: [ 'tests/**/*_spec.js' ]
    },
    bump: {
      options: {
        files: ['package.json'],
        commit: true,
        commitFiles: ['-a'],
        commitMessage: 'chore(release): release v%VERSION%',
        createTag: true,
        tagName: 'v%VERSION%',
        push: true,
        pushTo: 'origin'
      }
    }
  });
  grunt.registerTask('default', [
    'jshint',
    'nodeunit'
  ]);

  grunt.registerTask('release', function(target) {
    if (target === 'patch' || target === 'minor' || target === 'major' || target === 'git') {
      grunt.task.run([
        'default',
        'bump-only:' + target,
        'changelog',
        'bump-commit'
      ]);
    }
  });
};


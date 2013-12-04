/*
 * grunt-hashres
 * https://github.com/luismahou/grunt-hashres
 *
 * Copyright (c) 2013 luismahou
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: ".",
          cssIn: "site-xdad/css/main.css",
          optimizeCss: "standard",
          out: "site-xdad/css/main-built.css"
        }
      }
    },
    hashres: {
      options: {
        fileNameFormat: 'main-built-${hash}.${ext}'
      },
      cssTask: {
        src : ['site-xdad/css/main-built.css'],
        dest: ['*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-hashres');
  grunt.registerTask('default', ['requirejs','hashres']);

};

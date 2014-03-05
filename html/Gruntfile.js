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
      webcss: {
        options: {
          baseUrl: ".",
          cssIn: "site-xdad/css/main.css",
          optimizeCss: "standard",
          out: "site-xdad/css/main-built.css"
        }
      },
      mobilecss: {
        options: {
          baseUrl: ".",
          cssIn: "mobile.css",
          optimizeCss: "standard",
          out: "mobile-built.css"
        }
      }
    },
    hashres: {
      options: {
      },
      webCssTask: {
        fileNameFormat: '${name}-built-${hash}.${ext}',
        src : ['site-xdad/css/main-built.css'],
        dest: ['site-xdad.html','site-xdad-en.html']
      },
      mobileCssTask: {
        fileNameFormat: '${name}-built-${hash}.${ext}',
        src : ['mobile-built.css'],
        dest: ['mobile-xdad.html','mobile-xdad-en.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-hashres');
  grunt.registerTask('default', ['requirejs:webcss','requirejs:mobilecss', 'hashres']);

};

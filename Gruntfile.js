'use strict';


module.exports = function(grunt) {
  
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            src: ['bower_components/bootstrap/dist/js/bootstrap.min.js'],
            dest: 'public/js/vendor/bootstrap.min.js'
          },
          {
            src: ['bower_components/jquery/dist/jquery.min.js'],
            dest: 'public/js/vendor/jquery.min.js'
          },
          {
            src: ['bower_components/jquery/dist/jquery.min.map'],
            dest: 'public/js/vendor/jquery.min.map'
          },
          {
            src: ['bower_components/bootstrap/dist/css/bootstrap-theme.min.css'],
            dest: 'public/css/bootstrap-theme.min.css'
          },
          {
            src: ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
            dest: 'public/css/bootstrap.min.css'
          },

          {
            src: ['bower_components/google-code-prettify/src/prettify.css'],
            dest: 'public/css/prettify.css'
          },
          {
            src: ['bower_components/google-code-prettify/src/prettify.js'],
            dest: 'public/js/vendor/prettify.js'
          },

          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/fonts/',
            src: '**',
            dest: 'public/fonts/',
            flatten: true,
            filter: 'isFile'
          },          
        ]
      }
    },

  });

  grunt.registerTask('default', ['copy']);

};
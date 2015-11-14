'use strict';

module.exports = function(grunt) {

      grunt.initConfig({
        sass: {
          dist: {
            files: [{
              expand: true,
              cwd: 'client/assets/stylesheets',
              src: ['**/*.scss'],
              dest: 'client/assets/stylesheets/css',
              ext: '.css'
            }]
          }
        },
       watch: {
        sass: {
          files: '**/*.scss',
          tasks: ['sass']
          }
        }
      });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
      'watch'
    ]);

};

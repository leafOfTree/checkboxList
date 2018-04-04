module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pug: {
      dev: {
        options: {
          pretty: true
        },
        files: {
          'example/checkboxList.html': 'checkboxList.pug'
        }
      },
    },
    "string-replace": {
      dev: {
        files: {
          'dist/checkboxList.js': 'checkboxList.js',
          'example/checkboxList.js': 'checkboxList.js',
        },
        options: {
          replacements: [
            {
              pattern: "{html}",
              replacement_old: "<h1>this is a replacement!</h1>",
              replacement: function(match, p1, offset, string) {
                return grunt.file.read('example/checkboxList.html');
              }
            }
          ]
        }
      }
    },
    watch: {
      pug: {
        files: ['**/*.pug'],
        tasks: ['pug', 'string-replace'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['**/*.css'],
        tasks: [],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['*.js'],
        tasks: ['string-replace'],
        options: {
          livereload: true
        }
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-string-replace');
  return grunt.registerTask('default', ['pug', 'string-replace', 'watch']);
};

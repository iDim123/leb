module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'build/css/styles.css': 'scss/main.scss'
        },
      }
    },
    cssmin: {
      target: {
        files: [{
          src: ['build/css/styles.css'],
          dest: 'build/css/styles.min.css',
        }]
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      build: {
       src: ['js/**/*.js'],
       dest: 'build/js/scripts.js',
      },
      vendors: {
        src: ['bower_components/angular/angular.min.js',
                'bower_components/angular-route/angular-route.min.js',
                'bower_components/jquery/dist/jquery.min.js'],
        dest: 'build/js/vendors.js'
      },
      move: {
        files: [
          {
            src: ['bower_components/angularjs/angular.min.js.map'],
            dest: 'build/js/angular.min.js.map'
          },
          {
            src: ['bower_components/angular-route/angular-route.min.js.map'],
            dest: 'build/js/angular-route.min.js.map'
          },
        ]
      }
    },
    uglify: {
      dist: {
        files: {
          'build/js/scripts.min.js': ['build/js/scripts.js']
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:build', 'uglify']
      },
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-karma");

  // Default task(s).
  grunt.registerTask('default', ['sass','cssmin','concat', 'uglify', 'watch']);

};
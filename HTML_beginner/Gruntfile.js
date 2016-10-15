module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: ['node_modules/jquery/dist/jquery.js',
             'node_modules/bootstrap/dist/js/bootstrap.min.js',
             'js/**/*.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
      watch: {
  scripts: {
    files: ['js/*.js'],
    tasks: ['uglify'],
    options: {
      spawn: false,
    },
  },
},
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
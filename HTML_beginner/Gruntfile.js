module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['node_modules/jquery/dist/jquery.js',
                      'node_modules/angular/angular.min.js',
                        'node_modules/bootstrap/dist/js/bootstrap.min.js',
                        'src/js/**/*.js'],
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/**/*.css', 'src/**/*.html'],
                tasks: ['dev'],
                options: {
                    spawn: false
                },
            },
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'src/css/<%= pkg.name %>.min.css': ['node_modules/bootstrap/dist/css/bootstrap.min.css',
                                                        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                                                        'src/css/additional.css',
                                                         ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/fonts/',
                        src: '**/*',
                        dest: 'build/fonts',
                    },
                    {
                        expand: true,
                        cwd: 'src',
                        src: '*.html',
                        dest: 'build',
                    },
                    {
                        expand: true,
                        cwd: 'src/css',
                        src: '**/html5-beginner.min.css',
                        dest: 'build/css',
                    },
                    {
                        expand: true,
                        cwd: 'src/json',
                        src: '**/*',
                        dest: 'build/css',
                    }
                ]
            },
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');


    // Default task(s).
    grunt.registerTask('dev', ['uglify', 'cssmin', 'copy']);
    grunt.registerTask('default', ['watch']);

};
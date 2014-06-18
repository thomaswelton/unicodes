module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        less: {
            unicodes: {
                files: {
                    "compiled/unicodes-less.css": "dist/unicodes.less"
                }
            }
        },
        sass: {
            unicodes: {
                files: {
                    'compiled/unicodes-scss.css': 'dist/unicodes.scss'
                }
            }
        },
        csslint: {
            unicodes: {
                options: {
                    import: false
                },
                src: ['dist/unicodes.css']
            }
        },
        bless: {
            css: {
                options: {},
                files: {
                    'dist/unicodes.css': 'dist/unicodes.css'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('compile', function () {
        var done = this.async();
        require('./index').compile(done);
    });

    grunt.registerTask('test', []);
    grunt.registerTask('default', ['compile', 'bless', 'csslint', 'sass', 'less']);
};

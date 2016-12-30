module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:{
        dev:{
            options:{
                compress:false,
                mangle:false,
                sourceMap: true,
                sourceMapIncludeSource:true,
                preserveComments: true,
                beautify:true
            },
            src:['node_modules/angular/angular.js','src/modules/*.js','src/controllers/*.js'],
            dest:'js/app.js'
        },
        build:{
            options:{
                compress:true,
                mangle:true
            },
            src:['node_modules/angular/angular.js','src/modules/*.js','src/controllers/*.js'],          
            dest:'js/app.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:build']);
  grunt.registerTask('dev', ['uglify:dev']);

};
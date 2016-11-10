'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;
var appServer = require('./back/server');
var jasmineNode = require('gulp-jasmine-node');


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('tddFront', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, function () {
        done();
    }).start();
});

gulp.task('serve', function(callback) {
    appServer.start(callback);
});

gulp.task('unitBack', function () {
    return gulp.src(['back/*spec.js']).pipe(jasmineNode({
        timeout: 10000,
        includeStackTrace: false,
        color: false
    }));
});
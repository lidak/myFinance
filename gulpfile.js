'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;
var appServer = require('./back/server');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('tdd', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, function () {
        done();
    }).start();
});

gulp.task('startServer', function(callback) {
    appServer.start(callback);
});
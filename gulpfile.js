const gulp = require('gulp');
const connect = require('gulp-connect');

const devServer = function() {
    connect.server({
        livereload: true,
        port: 9527
    });
}

exports.default = devServer;
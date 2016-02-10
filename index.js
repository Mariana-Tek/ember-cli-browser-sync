/* jshint node: true */
'use strict';
let browserSync = require('browser-sync').create();
module.exports = {
  name: 'ember-cli-browser-sync',
  postBuild: function() {
    browserSync.emitter.on('init', () => {
      this.ui.writeLine('### Starting Browsersync!');
    });
    browserSync.init({
      server: './dist',
      open: false
    });
    return function() {};
  }
};

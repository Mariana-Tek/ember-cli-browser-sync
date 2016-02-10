/* jshint node: true */
'use strict';
let browserSync = require('browser-sync').create();
module.exports = {
  name: 'ember-cli-browser-sync',
  browserSyncInitialized: false,
  postBuild: function() {
    if(!this.browserSyncInitialized) {
      browserSync.init({
        server: './dist',
        open: false,
        files: ['./dist/**/*']
      });
      this.browserSyncInitialized = true;
    }
  }
};

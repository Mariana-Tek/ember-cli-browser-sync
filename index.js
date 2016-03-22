/* jshint node: true */
'use strict';
const browserSync = require('browser-sync').create();
// const htmlInjector = require('bs-html-injector');

module.exports = {
    name: 'ember-cli-browser-sync',
    browserSyncInitialized: false,
    defaults: {
        files: ['./dist/**'],
        logLevel: "debug",
        open: false,
        // port: 4200,
        // proxy: 'localhost:4200/admin/',
        plugins: [
            {
                module: 'bs-html-injector',
                options: {
                    files: ['./dist/index.html']
                }
            }
        ],
        ui: {
            port: 4200
        }
    },
    included: function(app) {
        this._super.included(app);
    },
    postBuild: function() {
        if(!this.browserSyncInitialized) {
            browserSync.init(this.defaults);
            this.browserSyncInitialized = true;
        }
    }
};

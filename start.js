require("@babel/register")({
    presets: ["@babel/preset-env"]
});
require('babel-polyfill');
require('dotenv/config');

module.exports = require('./app.js')

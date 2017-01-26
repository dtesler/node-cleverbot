'use strict';

const query = require('./query');

module.exports = function Cleverbot (opts) {

  this.query = query(opts);

};

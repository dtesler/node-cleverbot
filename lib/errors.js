'use strict';

const ERRORS = {
  "401": new Error('Cleverbot API key not valid'),
  "404": new Error('Cleverbot API not found'),
  "413": new Error('Cleverbot API request too large. Please limit requests to 8KB'),
  "503": new Error('Cleverbot API: Too many requests from client'),
  "DEFAULT": new Error('Cleverbot API: Unknown Error.')
};

module.exports = ERRORS;

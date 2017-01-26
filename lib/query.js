'use strict';

const request = require('request');
const Promise = require('bluebird');

const parseJSON = require('./parseJSON');
const ERRORS = require('./errors');

const BASE_API_URL = 'http://www.cleverbot.com/getreply?key={apikey}&input=op{input}';
const CS_STRING = '&cs={cs}';

function export_function(settings) {

  return function query(input, options) {
      return new Promise(function(resolve, reject) {

        let requestURL =
          BASE_API_URL
          .replace('{apikey}', settings.key)
          .replace('{input}', input);

        if (options && options.cs)
          requestURL +=
            CS_STRING
            .replace('{cs}', options.cs);

        request(requestURL,
          function (err, httpResponse, body) {
            if (err)
              return reject(err);

            let status = httpResponse.statusCode;
            if (status == 200)
              return resolve(parseJSON(body));
            reject(ERRORS[status.toString()] || ERRORS.DEFAULT);

          });
      });
    };
}

module.exports = export_function;

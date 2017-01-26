'use strict';

function parseJSON(json) {
  try {
    return JSON.parse(json);
  }
  catch (e) {
    return json;
  }
}
module.exports = parseJSON;

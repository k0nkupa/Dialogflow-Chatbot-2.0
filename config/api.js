var apiai = require('apiai');

//API Key
var app = apiai("659a64c1a8ba491f9609a6e28692b720");
console.log('1');
// Function which returns speech from api.ai
var getRes = function(query) {
  var request = app.textRequest(query, {
      sessionId: '<unique session id>'
  });
  const responseFromAPI = new Promise(function (resolve, reject) {
    request.on('error', function(error) {
      reject(error);
    });
    request.on('response', function(response) {
      console.log('5');
      resolve(response);
      console.log(response.result);
    });
  });
  request.end();
  return responseFromAPI;
};

// test the command :

module.exports = {getRes}

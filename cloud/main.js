var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log("Hi Peter - In getConfig() call");
  

var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log("In getConfig() call");
  
  var config = require("config.js");






	var SendGrid = require('sendgrid').SendGrid;
	var sendgrid = new SendGrid("peter.murphy","Put3rmorphy");
	sendgrid.send({
	  to: 'stephen.decourcy@gmail.com',
	  from: 'stephen.decourcy@feedhenry.com',
	  subject: 'Hello World',
	  text: 'My first email through SendGrid'
	}, function(success, message) {
	  if (!success) {
	    console.log(message);
	  }
	});




  return callback(null, {madeUpKey: config.ABC});
};






  var config = require("config.js");
  return callback(null, {madeUpKey: config.cloudObject1});
};


var expect  = require('chai').expect;
var request = require('request');

var string = "About";

describe("Google Test", function() {
	it('Check Google for "' + string + '" Text', function(done) {
	    request('https://google.com' , function(error, response, body) {
	        expect(body).to.include(string);
	       	done();
	    });
	});
});

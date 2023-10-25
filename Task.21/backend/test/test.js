const expect = require('chai').expect;
const request = require('request');

describe('Testing search', function() {
   it('result', function(done) {
      request('http://localhost:5000/search',
         function(error, response, body) {
            this.timeout = 10000;
            expect(response).not.to.be.undefined;
            done();
         })
   })
})

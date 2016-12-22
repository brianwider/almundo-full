'use strict';

var app = require('../..');
import request from 'supertest';

describe('Products API:', function() {
  describe('GET /api/products', function() {
    var productss;

    beforeEach(function(done) {
      request(app)
        .get('/api/products')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          productss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(productss).to.be.instanceOf(Array);
    });
  });
});

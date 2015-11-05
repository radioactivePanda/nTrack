var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;
var supertest = require('supertest');
var app = require('../server/server.js');
var api = supertest('http://localhost:3000');


describe('Server:\n',function(){
  describe('End Points: \n',function(){
    it('route "/" should return 200 "OK"', function (done) {
      api.get('/')
          .set('Accept', 'application/json')
          .expect(200, done);
    });
    it('route "/login" should return 401 "Unauthorized"', function (done) {
      api.post('/login')
          .set('Accept', 'application/json')
          .expect(401, done);
    });
    it('route "/signup" should return 401 "Unauthorized"', function (done) {
      api.post('/signup')
          .set('Accept', 'application/json')
          .expect(401, done);
    });
    it('route "/logout" should return 200 "OK"', function (done) {
      api.get('/logout')
          .set('Accept', 'application/json')
          .expect(200, done);
    });
  });
});

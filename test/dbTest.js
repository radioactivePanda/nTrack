var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;
var db = require('../server/config/db-config.js');

describe('Database:\n', function() {
  describe('User:\n', function() {
    var user1 = {
      name : 'Test',
      password : 'test1',
      email : 'test@email.com',
      personalData: {}, 
      applications: {}
    }    

    it('should add a user to the DB', function() {
      return expect(new db.User(user1)
            .save()).to.eventually.be.fulfilled;
    });

    it('The new User should have a name property (String)', function() {
      return expect(db.user.tree.name).to.equal(String);
    });

    it('The new User should have a password property (String)', function() {
      return expect(db.user.tree.password).to.equal(String);
    });

    it('The new User should have an email property (String)', function() {
      return expect(db.user.tree.email).to.equal(String);
    });

    it('The new User should have a personalData property (Mixed)', function() {
      return expect(typeof db.user.tree.personalData.default).to.equal('object');
    });

    it('The new User should have an applications property (Mixed)', function() {
      return expect(typeof db.user.tree.applications.default).to.equal('object');
    });

    it('should reject a user with existing email', function() {
      return expect(new db.User(user1)
            .save()).to.eventually.be.rejected;
    });

    it('The new User\'s password should be encrypted', function() {
      return db.User.findOne({name:'Test'}, function(err,a) {
        return expect(a.password).to.not.equal('test1');
      });
    });

  }); 
  after(function() {
    var email = 'test@email.com';
    db.User.remove({email: email}, function(err) {
      if(err){
        return err;
      }
    });
  });
});

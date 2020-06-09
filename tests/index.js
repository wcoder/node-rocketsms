const should = require('should');
var RocketSMS = require('../src');

var sms = new RocketSMS('username', 'password');

describe('RocketSMS', () => {
  describe('#send()', () => {
    it('should send message', async () => {
      const res = await sms.send('375299999999', 'Привет, тестовая смска');
      res.should.have.property('id');
      res.should.have.property('status');
      res.should.have.property('cost');
    });
  });

  describe('#balance()', () => {
    it('should return balance', async () => {
      const res = await sms.balance();
      res.should.have.property('credits');
      res.should.have.property('balance');
    });
  });
});

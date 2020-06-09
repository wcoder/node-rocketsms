var RocketSMS = require('../src');

const assert = require('assert');

var sms = new RocketSMS('username', 'password');

describe('RocketSMS', () => {
  describe('#send()', () => {
    it('should send message', async () => {
      const res = await sms.send('375299999999', 'Привет, тестовая смска');

      assert.property(res, 'id');
      assert.property(res, 'status');
      assert.property(res, 'cost');
    });
  });
});

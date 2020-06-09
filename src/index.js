const axios = require('axios');
const md5 = require('md5');

class RocketSMS {
  constructor(username, password) {
    this.username = username;
    this.hash = md5(password);
  }

  /**
   * Send a single message.
   * @param {string} phone - recipient number.
   * @param {string} text - message.
   * @param {string} [sender] - sender name.
   * @param {int} [timestamp] - sending with delay in seconds.
   * @param {bool} [priority] - fast sending (codes, passwords).
   */
  async send(phone, text, sender, timestamp, priority) {
    const response = await axios.post('https://api.rocketsms.by/simple/send', null, {
      params: {
        username: this.username,
        password: this.hash,
        phone: phone,
        text: text,
        sender: sender,
        timestamp: timestamp,
        priority: priority
      }
    });
    return response.data;
  }

  /**
   * Get current balance.
   */
  async balance() {
    const response = await axios.get('https://api.rocketsms.by/simple/balance', {
      params: {
        username: this.username,
        password: this.hash
      }
    });
    return response.data;
  }
}

module.exports = RocketSMS;

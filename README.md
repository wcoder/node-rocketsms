# node-rocketsms

Modern RocketSMS SMS-gateway API.

## Features

- Supports [API spec](https://rocketsms.by/storage/rocketsms_api.pdf) v1.3.0.
- Clear, lightful API layer
- Async/await/Promises

## Installation

This module is installed via npm:

```sh
npm install node-rocketsms
```

## Example Usage

```js
var RocketSMS = require('node-rocketsms');

var sms = new RocketSMS('username', 'password'});
```

### Create message

``` js
const result = await sms.send('375999999999', 'New message text!');
```

### Message status

```js
const result = await sms.status(123456789);
```

### Account balance

```js
const result = await sms.balance();
```

### Alfa-numbers list

```js
const result = await sms.senders();
```

### Add alfa-number

```js
const result = await sms.addSender('SenderName');
```

### Templates list

```js
const result = await sms.templates();
```

---

&copy; 2020

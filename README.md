# 🌐 ip-lookup

A lightweight IP address classifier — tells you the class (A–E) and whether it's a private address.

## Usage

```js
const lookup = require('./index.js');

lookup('192.168.1.1');
// { ip: '192.168.1.1', class: 'C', isPrivate: true }

lookup('8.8.8.8');
// { ip: '8.8.8.8', class: 'A', isPrivate: false }

lookup('172.16.0.1');
// { ip: '172.16.0.1', class: 'B', isPrivate: true }
```

## License

MIT

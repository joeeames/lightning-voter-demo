var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

module.exports = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || 8800
  },
  production: {
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}
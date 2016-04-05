var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./config')[env];

require('./expressConfig')(app, config);

// require('./server/config/mongoose')(config);

// require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');
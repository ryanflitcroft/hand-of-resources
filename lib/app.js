const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/api/v1/movies', require('./controllers/movies'));
app.use('/api/v1/animals', require('./controllers/animals'));
app.use('/api/v1/artists', require('./controllers/artists'));
app.use('api/v1/concerts', require('./controllers/concerts'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;

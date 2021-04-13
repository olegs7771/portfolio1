const path = require('path');
const express = require('express');
// const compression = require('compression');
const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
const helmet = require('helmet');

require('dotenv').config();
const contact = require('./routes/contact');

const app = express();

// FORCE to HTTPS
app.enable('trust proxy');
app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'devopment' && !req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
});

app.use(helmet({ contentSecurityPolicy: false }));

// BODY PARSER WITH LIMITTED BODY
app.use(express.json({ limit: '10kb' }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.setHeader('set-cookie', ['SameSite=Strict;SameSite=Strict']);
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

app.use('/api/v1/contact', contact);

module.exports = app;
//

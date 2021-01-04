const app = require('./app');
const https = require('https');
const path = require('path');
const fs = require('fs');

// require('dotenv').config();
const PORT = process.env.PORT || 5000;

const sslServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
  },
  app
);

sslServer.listen(PORT || 5000, () =>
  console.log(`Secure server 🔑 on port ${PORT}`)
);

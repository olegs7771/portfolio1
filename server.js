const app = require('./app');

const PORT = process.env.PORT || 5000;
console.log('process.env', process.env.PORT);

const server = app.listen(PORT, () =>
  console.log(`Secure server 🔑 on port ${PORT}`)
);

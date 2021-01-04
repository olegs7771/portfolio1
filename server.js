const app = require('./app');

const PORT = process.env.PORT || 5000;

app.listen(PORT || 5000, () => console.log(`Secure server 🔑 on port ${PORT}`));

const app = require('./app');

// require('dotenv').config();
const PORT = process.env.PORT || 5000;

app.listen(PORT || 5000, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

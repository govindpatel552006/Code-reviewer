
require('dotenv').config(); // LOAD ENV VARIABLES
const app = require('./src/app');

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});

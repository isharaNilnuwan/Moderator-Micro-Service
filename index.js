const app = require("./src/app")

require('dotenv').config();

const port = process.env.PORT || 1008;

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
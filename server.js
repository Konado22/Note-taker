const express = require("express");
const PORT = process.env.PORT || 3001;
const routes = require('./routes/index')
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(routes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

const express = require('express');
const mongodb = require('./data/database');

const app = express();

const port = process.env.PORT || 8080;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err)
  } else {
    app.listen(port, () => {console.log(`Database is active and node app is listening on port ${port}`)})
  }
})

// import and require both express and mysql2
const express = require('express');
const mysql = require('mysql2');

const PORT = process.send.PORT || 3001;
const app = express();

// basic middleware boilerplate
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to the db and save it as a variable titled 'db'
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Mace123!',
    database: 'movies_db',
  },
  console.log('Nice, it worked and you connected.')
);

// set 404 status for any other route
app.use((req, res) => {
  res.status(404).end();
});
// set up server to listen on port 3001.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

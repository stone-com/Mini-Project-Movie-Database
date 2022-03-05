// import and require both express and mysql2
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
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

// route for /api/movies to render list of movies.
app.get('/api/movies', (req, res) => {
  const sql_string = `SELECT id, movie_name AS movie FROM movies`;

  db.query(sql_string, (err, results) => {
    if (err) {
      console.log(err);
      return;
    } else res.json(results);
  });
});

// route for adding movies
app.post('/api/add-movie', (req,res) => {
    const movie_add = (req.body.movie_name);
    const sql_string = `INSERT INTO movies (movie_name) VALUES(?)`;
    
    db.query(sql_string, movie_add, (err) => {
        if(err) {
            console.log(err)
        } 
        console.log('success')
    })
})

// set 404 status for any other route
app.use((req, res) => {
  res.status(404).end();
});
// set up server to listen on port 3001.
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const _ = require('lodash');
const ejs = require('ejs');
const path = require('path');
const nodemon = require('nodemon');
const movies = require('./views/movies.js');
const methodOverride = require('method-override');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));

const port = 4000;
app.use(express.json())

// GET
app.get('/', (req, res) => {
  const searchTerm = req.query.search || '';
  const filteredMovies = _.filter(
    movies,
    (movie) =>
      _.includes(movie.Title.toLowerCase(), searchTerm.toLowerCase()) ||
      _.includes(movie, searchTerm.toLowerCase())
  );
  res.render('index', { movies: filteredMovies, searchTerm: searchTerm });
});


app.get('/movies', (req, res) => {
res.render("movies", { Title: movies.Title})
})

//POST
app.get('/addMovie', (req, res) => {
  const title = req.query.title || '';
  res.render('addMovie', { Title: title });
});

app.post('/addMovie', (req, res) => {
  const newMovie = { Title: req.body.movie };
  movies.unshift(newMovie);
  res.redirect('/');
});


// PUT
app.get('/updateMovie', (req, res) => {
    res.render('updateMovie');
});


// DELETE
app.get('/deleteMovie', (req, res) => {
  const title = req.query.title
  res.render('deleteMovie', { Title: title });
});

// app.delete('/deleteMovie', (req, res) => {
//   const imdbID = req.params.imdbID;
//   // _.remove(movies, { imdbID: imdbID });
//   // const deletedMovie = _.filter(movies, (movie) => {});
//   res.redirect('/');
// });

app.use((req, res, next) => {
  res.status(404).send('Page not found!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

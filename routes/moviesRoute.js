const express = require("express");
const router = express.Router();
const movieData = require('../movieData.js');

let movies = movieData;

// GET - titles of all movies 
router.get('/', (req, res) => {
  const titles = movies.map(movie => movie.Title)
  res.send(titles)
})

// GET Movie by id
router.get('/id/:id', (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.imdbID === id);
  movie ? res.send(movie.Title) : res.status(404).send('No movie found!');
});

// GET movie by title
router.get('/title/:title', (req, res) => {
  const title = req.params.title;
  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase()
      .replace(/\s/g, '')
      .includes(title.toLowerCase().replace(/\s/g, ''))
  );
  const movieTitle = filteredMovies.map((movie) => movie.Title);
  res.send(movieTitle);
});

// DELETE movie by ID
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const deletedMovie = movies.find((movie) => movie.imdbID === id);
  const newMovieList = movies.filter((movie) => movie.imdbID !== id);
  movies = newMovieList;
  if (!deletedMovie) {
    return res
      .status(404)
      .send('Movie not found!')
  } else {
   return res.send(`'${deletedMovie.Title}' was removed`);
  } 
});

// POST - Add a new movie
let newID = 1;
router.post('/', (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);

  res.json(newMovie);
});

// PUT - Update a movie
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const movieIndex = movies.findIndex((movie) => movie.imdbID === id);

  if (movieIndex === -1) {
    return res.status(404).send('No movie found');
  }

  const updatedMovie = { ...movies[movieIndex], ...req.body.movie };
  movies[movieIndex] = updatedMovie;

  res.send(updatedMovie);
});




module.exports = router;


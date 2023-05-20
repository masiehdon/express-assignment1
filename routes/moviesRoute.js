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
  newMovieList = movies.filter((movie) => movie.imdbID !== id);
  movies = newMovieList;
  res.send(`'${deletedMovie.Title}' was removed`);
});

// POST - Add a new movie
let newID = 1;
router.post('/', (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);

  res.json(newMovie);
});

// PUT - Update a movie
const updatedMovie = {
  imdbID: newID++,
  Title: 'New updated Movie',
  Year: 2023,
};

router.put('/:id', (req, res) => {
  const id = req.params.id;
  let update = movies.find((movie) => movie.imdbID === id);
  if (!update) {
    res.send('No movie found');
  } else {
    update = updatedMovie;
    res.send(updatedMovie);
  }
});



module.exports = router;


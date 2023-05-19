const express = require('express');
const _ = require('lodash');
const ejs = require('ejs');
const nodemon = require('nodemon');
const films = require('./routes/movies.js');


const app = express();
app.set('view engine', 'ejs');


const port = 4000;
app.use(express.json())

let movies = films;

const apiKey = "5"

const validKey = (req, res, next) => {
  const key = req.query.key;
  if (!validKey) {
    res.status(404).send('<h1>Page not found!</h1>');
  } else if(key != apiKey) {
    res.status(403).send('Not authorized')
  } else {
    next()
  }
}

app.use((req, res, next) => {
  validKey(req, res, next)
})

// GET
app.get('/', (req, res) => {
  res.send('Page successfully loaded')
})

// GET Movie by id 
app.get('/movies/id/:id', (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.imdbID === id)
  movie ?  res.send(movie.Title) : res.status(404).send('No movie found!')
 
})

// GET movie by title
app.get('/movies/title/:title', (req, res) => {
  const title = req.params.title;
  const filteredMovies = movies.filter(
    (movie) =>
      movie.Title.toLowerCase().replace(/\s/g, '').includes(title.toLowerCase().replace(/\s/g, '')
      ));
  const movieTitle = filteredMovies.map(movie => movie.Title)
  res.send(movieTitle);
})

// DELETE movie by ID
app.delete('/movies/:id', (req, res) => {
  const id = req.params.id;
  const deletedMovie = movies.find((movie) => movie.imdbID === id); 
  newMovieList = movies.filter((movie) => movie.imdbID !== id);
  movies = newMovieList
  res.send(`'${deletedMovie.Title}' was removed`)
  })

  // POST - Add a new movie
  let newID = 1
app.post('/movies', (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie)
  
  res.json(newMovie)
});


// PUT - Update a movie
const updatedMovie = {
  "imdbID": newID++,
  "Title": 'New updated Movie',
  "Year": 2023,
};
  
  
app.put('/movies/:id', (req, res) => {
  const id = req.params.id
  let update = movies.find(movie => movie.imdbID === id)
  if (!update) {
    res.send('No movie found')
  } else {
    update = updatedMovie
    res.send(updatedMovie)
  }
})

// Handling 404 status
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>')
  next()
})

app.listen(port, () => {
  console.log('running on port 4000');




})

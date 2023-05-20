const express = require('express');
const nodemon = require('nodemon');
const app = express();
const moviesRoute = require("./routes/moviesRoute");



const port = 4000;

//JSON Middleware
app.use(express.json())


// Middleware to check if apiKey is valid

 const apiKeys = [1, 2, 3, 4, 5, 6];

const validKey = (req, res, next) => {
  const key = Number(req.query.key);
  const apiKey = apiKeys.includes(key);
  if (!key) {
    return res.status(401).send('401 Unauthorized');
  } else if (!apiKey) {
    return res.status(403).send('403 Forbidden');
  } else {
    next();
  }
};

app.use((req, res, next) => {
  validKey(req, res, next);
});


// GET Message
app.get('/', (req, res) => {
  res.send('Page successfully loaded');
});



 app.use('/movies', moviesRoute);

// Handling 404 status
app.use((req, res, next) => {
  res.status(404).send('Page not found!')
  next()
})

app.listen(port, () => {
  console.log('running on port 4000');

})


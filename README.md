# Movie API

This API allows you to retrieve, add, update, and delete movie information. It provides various endpoints to perform these operations. API requests should be made to http://localhost:4000.

## Authentication

Some API endpoints require an API key for authentication. Include the key parameter in the query string of your request to authenticate. The valid API keys are: 1, 2, 3, 4, 5, 6.

## Endpoints
Get All Movies
Returns a list of all movies.

URL: /movies
Method: GET
Authentication: Required (key parameter in the query string)
Response Format: JSON
Sample Response:
json
Copy code
[
  "Becoming Bond",
  "The Avengers",
  "Inception"
]

## Get Movie by ID
Retrieves information about a specific movie using its IMDb ID.

URL: /movies/id/:id
Method: GET
Authentication: Required (key parameter in the query string)
URL Parameters:
id (string, required): The IMDb ID of the movie
Response Format: Plain Text
Sample Request: /movies/id/tt6110504
Sample Response: Becoming Bond

## Get Movie by Title

Retrieves movies based on a partial or complete title match.

URL: /movies/title/:title
Method: GET
Authentication: Required (key parameter in the query string)
URL Parameters:
title (string, required): The partial or complete title of the movie
Response Format: JSON
Sample Request: /movies/title/avengers

## Delete Movie by ID
Deletes a movie from the database using its IMDb ID.

URL: /movies/:id
Method: DELETE
Authentication: Required (key parameter in the query string)
URL Parameters:
id (string, required): The IMDb ID of the movie
Response Format: Plain Text
Sample Request: /movies/tt6110504
Sample Response: 'Becoming Bond' was removed

## Add New Movie
Adds a new movie to the database.

URL: /movies
Method: POST
Authentication: Required (key parameter in the query string)
Request Body:
imdbID (string, required): The IMDb ID of the movie
Title (string, required): The title of the movie
Year (number, required): The year of the movie's release
(Include other movie properties as needed)
Response Format: JSON
Sample Request Body:
json
Copy code
{
  "imdbID": "tt1234567",
  "Title": "New Movie",
  "Year": 2023
}
Sample Response:
json
Copy code
{
  "imdbID": "tt1234567",
  "Title": "New Movie",
  "Year": 2023
}

## Update Movie by ID
Updates information about a movie using its imdbID.



## Credits

We would like to extend our heartfelt gratitude and recognition to the following extraordinary contributors who made this project possible:

Our amazing teacher, who tirelessly guided us through the coding labyrinth, reminding us that semicolons are not optional and that indentation is a form of art. Without your guidance, we would have been lost in the sea of curly braces.

Google, our ever-reliable companion in times of confusion and uncertainty. Thank you for being our go-to search engine and providing us with countless Stack Overflow threads and documentation pages. We owe you more than just a "Did you mean...?" suggestion.

ChatGPT, the brilliant AI language model that assisted us along the way. Your encyclopedic knowledge and helpful suggestions have been invaluable in shaping our code and answering our endless questions. You've proven that artificial intelligence can truly be a developer's best friend.

And last but not least, a special shout-out to the coffee machine that never failed us during those late-night coding sessions. Your magical elixir kept our neurons firing and our code flowing (although sometimes with a touch of caffeine-induced jitters).

Together, these extraordinary forces have propelled us forward on our coding journey. We are forever grateful for their unwavering support and contribution to our success.

"Programmers do not live on code alone, but on the collective efforts of mentors, search engines, and friendly AI models."

## Contact

No thank you.


// Dependencies
// environment variables like secrets and api keys
require('dotenv').config();
// importing the keys.js file
const keys = require('./keys');
// importing spotify npm package
const Spotify = require('node-spotify-api');
// import request
const request = require('request');
// spotify with my ID and secret
const spotify = new Spotify(keys.spotify);

// 4 commands
// concert this
// spotify-this-song
// movie-this
// do-what-it-says


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




// Functions

// 4 commands
// concert this
// spotify-this-song
// movie-this
// do-what-it-says



// switch case to execute the command
const choose = function(operation, nameOfMedia){
  switch(operation){
    case 'concert-this':
      getBands(nameOfMedia);
      break;
    case 'spotify-this-song':
      spotifyThis(nameOfMedia);
      break;
    case 'movie-this':
      movieThis(nameOfMedia);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("That is not a valid command. Try again.");
  }
};


// get the input from the CLI run which function
const run = function(input1, input2){
  choose(input1, input2);
}


// Process
run(process.argv[2], process.argv[3]);
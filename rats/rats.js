/*
	
	Using an open API, parse the json or XML data to pull out various
 	bits of information.
	Then visualize this information on the screen in some way.

	OpenWeatherMap is another API that does not require API keys:
	http://openweathermap.org/API

	A few others are listed at the bottom of this link:
	https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON

	See Chapter 18 in LP AND reference Chapter 12 in Make: Getting Started with P5.js

	This is due on November 10th and is worth 2 Exercises
*/



//https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000

var nytUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=police+brutality+u+s&begin_date=18310101&end_date=18311231&api-key=9bcb8c6bad7c5f7b8ea349104cfdcccf%3A14%3A71691949'; 

function preload(){
	getNyt();
}

function setup(){
	
}

function draw(){
	
}


// this is gonna grab the NYC open data stuff
function getNyt(){

	 // this will download the city open data on the health violations:
  articles = loadJSON(nytUrl, articlesLoaded); // asynchronous API call

}

function artcilesLoaded(){
	// this will run once the city open data is grabbed
	console.log(rats.length); // how many records?
}

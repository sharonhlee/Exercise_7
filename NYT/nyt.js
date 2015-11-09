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


var api='http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%27s+rights';
var year=1995;
var apidate='&begin_date='+year+'0101&end_date='+year+'1231';
var apiKey='&api-key=9bcb8c6bad7c5f7b8ea349104cfdcccf%3A14%3A71691949';
var nytUrl = api+apidate+apiKey;
var size;

function setup(){
    createCanvas(600,600);
    background(255,190,245);
    articles = loadJSON(nytUrl, articlesLoaded);
}

function draw(){
    noStroke();
    fill(255);
	ellipse(width/2,width/2,size,size);
}


function articlesLoaded(data){
	size=data.response.meta.hits;
}

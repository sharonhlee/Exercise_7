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


//var api='http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%27s+rights';
//var apidate='&begin_date='+yr+'0101&end_date='+yr+'1231';
//var apiKey='&api-key=32bc1bcdf69f07f2adcd6129af469c3b%3A13%3A71691949';
var yr=1831;
var num=0;
var articleEx = [];

function datePress(y){//pass the year to then change json url
    var api='http://api.nytimes.com/svc/search/v2/articlesearch.json?q=women%27s+rights';
    var apidate='&begin_date='+y+'0101&end_date='+y+'1231';
    var apiKey='&api-key=32bc1bcdf69f07f2adcd6129af469c3b%3A13%3A71691949';
    var nytUrl = api+apidate+apiKey;
    articles = loadJSON(nytUrl, articlesLoaded);
}

function setup(){
    createCanvas(600,500);

}

function draw(){
    background(0,200,185);
    noStroke();
    fill(255,190,245);
    ellipse(width/2,height/2,num,num);//visualize number of articles in the bg
    fill(255,255,255,175);
    
//trying to display headlines from each year, but bug appears in which rosie disappears
    
//    if (num>0){
//        for (i=0;i<num;i++){
//            text(articleEx[i],10,random(height));
//        }
//    }
//    else if (num>10){
//        for (i=0;i<10;i++){
//            text(articleEx[i],10,random(height));
//        }
//    }
    
    rosie(num);//pass the number of articles to 
    fill(0);
    textSize(32);
    textFont("Times New Roman");
    text("Women's Rights NYT Coverage in "+str(yr),10,30);//shows year
    text(str(num),320,360);
}


function articlesLoaded(data){//callback
	num=data.response.meta.hits;//number of articles in that year
    for (i=0;i<num;i++){//headlines
        articleEx[i]=data.response.docs[i].headline.main;
    }
}

function keyPressed() {//allows user to navigate through years
    if (keyCode === LEFT_ARROW && yr>1831) {
        yr=yr-1;
        datePress(yr);//calls to rerun the data file
    } else if (keyCode === RIGHT_ARROW && yr<2015) {
        yr=yr+1;
        datePress(yr);//^^
        
    }
}

function rosie(m){
    noStroke();
//    fill(255);
//    ellipse(width/2,height/2,size,size);
    fill(95,60,0);
    ellipse(220,120,75,75);//side hair
    ellipse(175,145,140,130);//top of hair
    
    fill(255,232,177);//skin color
    quad(170,250,245,255,245,280,175,280);//neck
    push();
        rotate(radians(-15));
        ellipse(155,228,145,170);//main body of face
        rotate(radians(-30));
        ellipse(25,340,50,65);//chin
//        coordinateAid();     
    pop();
    triangle(280,170,286,225,270,213);//fill in right side of chin
    triangle(268,250,239,256,254,249);//fill in left side of chin
    
    fill(252,230,175);//back arm bicep
    quad(425,420,354,401,347,432,413,455);
    fill(0,98,156);//back arm sleeve
    quad(373,400,374,444,334,433,332,391);
    fill(252,230,175);//back arm forearm
    quad(320,286,425,418,375,424,295,306);
    ellipse(413,433,35,40);//backarm elbow
    
    fill(0,110,175);//main body fill, aka shirt color
    push();
        rotate(radians(-30));
        ellipse(10,490,180,300);//base of main body
    pop();
    ellipse(310,385,110,110);//breast
    triangle(360,460,352,500,375,500);//filled gap of lower body, stomache area
    quad(160,265,255,270,257,296,170,297);//collar
    
    fill(255,0,0);
    beginShape();//LIPS
    curveVertex(243,221);
    curveVertex(241,225);
    curveVertex(244,217);
    curveVertex(247,215);
    curveVertex(253,215);
    curveVertex(255,211);
    curveVertex(257,208);
    curveVertex(260,208);
    curveVertex(263,208);
    curveVertex(266,210);
    curveVertex(264,218);
    curveVertex(260,220);
    curveVertex(256,225);
    curveVertex(249,225);
    endShape();
    
    fill(0);
    beginShape();//RIGHT BROW
    curveVertex(241,153);
    curveVertex(245,133);
    curveVertex(248,130);
    curveVertex(257,130);
    curveVertex(259,130);
    curveVertex(260,134);
    curveVertex(251,135);
    curveVertex(247,142);
    curveVertex(244,157);
    curveVertex(235,157);
    curveVertex(241,153);
    
    endShape();
    
    beginShape();//LEFT BROW
    curveVertex(206,167);
    curveVertex(213,168);
    curveVertex(200,163);
    curveVertex(190,162);
    curveVertex(182,162);
    curveVertex(175,169);
    curveVertex(172,177);
    curveVertex(173,182);
    curveVertex(178,177);
    curveVertex(182,170);
    curveVertex(189,170);
    curveVertex(193,170);
    curveVertex(198,170);
    curveVertex(202,170);
    curveVertex(206,172);
    curveVertex(206,167);
    endShape();
    
    //hair, bangs
    fill(95,60,0);
    ellipse(205,115,70,70);
    
    //headband base
    fill(255,0,0);
    beginShape();
    curveVertex(253,99);
    curveVertex(253,100);
    curveVertex(240,83);
    curveVertex(229,73);
    curveVertex(199,80);
    curveVertex(163,95);
    curveVertex(134,136);
    curveVertex(110,177);
    curveVertex(117,193);
    curveVertex(129,203);
    curveVertex(141,207);
    curveVertex(159,160);
    curveVertex(177,145);
    curveVertex(200,127);
    curveVertex(220,119);
    curveVertex(233,109);
    curveVertex(253,99);
    endShape();
    ellipse(183,87,25,25);//bow base
    beginShape();//right bow end
    curveVertex(190,85);
    curveVertex(190,80);
    curveVertex(190,74);
    curveVertex(193,68);
    curveVertex(198,61);
    curveVertex(205,55);
    curveVertex(211,51);
    curveVertex(212,50);
    curveVertex(212,58);
    curveVertex(210,67);
    curveVertex(208,74);
    curveVertex(204,82);
    curveVertex(199,87);
    curveVertex(190,85);
    endShape();
    beginShape();//left bow end
    curveVertex(180,92); 
    curveVertex(168,87); 
    curveVertex(158,83);
    curveVertex(144,83);
    curveVertex(138,85);
    curveVertex(133,88);
    curveVertex(141,95);
    curveVertex(149,100);
    curveVertex(159,102);
    curveVertex(166,102);
    curveVertex(175,103);
    curveVertex(180,92);
    endShape();
    fill(255);//polka dotsss
    ellipse(124,175,10,10);
    ellipse(143,173,10,10);
    ellipse(142,150,10,10);
    ellipse(164,144,10,10);
    ellipse(163,144,10,10);
    ellipse(163,112,10,10);
    ellipse(184,115,10,10);
    ellipse(189,95,10,10);
    ellipse(216,102,10,10);
    ellipse(218,85,10,10);
    ellipse(234,91,10,10);
    ellipse(134,195,10,10);
    ellipse(151,129,10,10);
    ellipse(159,92,10,10);
    ellipse(200,70,10,10);
    
    //arm in front
    fill(255,232,177);
    quad(258,313,444,330,457,383,262,380);//bicep
    quad(457,383,479,233,455,221,408,348);//forearm
    ellipse(445,370,37,32);//elbow
    
    
    //sleeve
    fill(0,110,175);
    quad(254,297,290,295,285,393,242,382);
    
    //hands
    fill(252,230,175);
    ellipse(294,288,64,46);//hand to the left
    fill(255,232,177);
    push();
    rotate(radians(-20));
    ellipse(363,351,46,64);//hand to the right
    pop();
    
    //muscle
    arc(352,328,122,map(m,0,1650,0,150),PI,TWO_PI);
}

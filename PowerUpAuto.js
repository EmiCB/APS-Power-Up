// declare variables

var screenWidth = 960;
var screenHeight = 1280;
var m;

var gameData = ["L","R","L"];


if(gameData[0] == "R") {
	rightSwitchAllied();
}
else if(gameData[0] == "L") {
	leftSwitchAllied();
}
if(gameData[1] == "R") {
	rightScale();
}
else if(gameData[1] == "R") {
	leftScale();
}
if(gameData[2] == "R") {
	rightSwitchEnemy();
}
else if(gameData[2] == "L") {
	leftSwitchEnemy();
}


function rightSwitchAllied()
	{
    	m = document.getElementById("0R");
        m.setAttribute("style", "fill:blue;fill-opacity:0.6");

    }
function rightScale()
	{
    	m = document.getElementById("1R");
        m.setAttribute("style", "fill:blue;fill-opacity:0.6");

    }
function rightSwitchEnemy()
	{
    	m = document.getElementById("2R");
        m.setAttribute("style", "fill:blue;fill-opacity:0.6");

    }
function leftSwitchAllied()
	{
    	m = document.getElementById("0L");
        m.setAttribute("style", "fill:blue;fill-opacity:0.6");

    }
function leftScale()
	{
    	m = document.getElementById("1L");
        m.setAttribute("style", "fill:blue;fill-opacity:0.6");

    }
function leftSwitchEnemy()
	{
    	m = document.getElementById("2L");
        m.setAttribute("style", "fill:blue;fill-opacity:0.6");

    }

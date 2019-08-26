var bloons = 0;
var dartTotal = 0;
var tackTotal = 0;
var sniperTotal = 0;
var boomerangTotal = 0;
var dartPrice = 100;
var tackPrice = 500;
var sniperPrice = 6000;
var boomerangPrice = 80000;
var dartBPS = 1;
var tackBPS = 5;
var sniperBPS = 25;
var boomerangBPS = 150;

function addBloons() { //function for clicking
	bloons = bloons + clickStr;
	//console.log(getCookie("bloons"))l;
	document.getElementById("bloons").innerHTML = points.toFixed(1) + ' Bloons';
}

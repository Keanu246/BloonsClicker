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

function addBloons(){ //function for clicking
	bloons = bloons + clickStr;
	//console.log(getCookie("bloons"))l;
	document.getElementById("bloons").innerHTML = points.toFixed(1) + ' Bloons';
}

function buyDart(){
  if(bloons >= dartPrice) {
      points = points - dartPrice;
        dartTotal = dartTotal + 1;
        dartPrice = Math.ceil(100 * 1.15**dartTotal);
	document.getElementById("dartMonkey").innerHTML = 'Buy a Dart Monkey for ' + dartPrice + ' Bloons';
	document.getElementById("dartAmmount").innerHTML = 'you have ' + dartTotal + ' Dart Monkeys';
	document.getElementById("dartProduce").innerHTML = 'Pops ' + (dartBPS * dartTotal).toFixed(1) + ' bloons per second';


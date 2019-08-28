function openTab(evt, pageName){
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName("tabcontent")
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}
/*
----Beginign of MainPage section of the javascript----
*/
//Initialize all global variables that are relevent to the game
var totalBPS = 0;
var bloons = 0;
var bloonstext = document.getElementById("bloons");
var clickStr = 1;
var clickCost = 100;
var refreshRateVar = 100;
var dartPrice = 50;
var dartTotal = 0;
var dartBPS = 1;
var tackPrice = 250;
var tackTotal = 0;
var tackBPS = 5;
var sniperPrice = 1000;
var sniperTotal = 0;
var sniperBPS = 20;
var boomerangPrice = 10000;
var boomerangTotal = 0;
var boomerangBPS = 150;
var bombPrice = 100000;
var bombTotal = 0;
var bombBPS = 1000;
var gluePrice = 1000000;
var glueTotal = 0;
var glueBPS = 8000;
var icePrice = 15000000;
var iceTotal = 0;
var iceBPS = 80000;
var ninjaPrice = 250000000;
var ninjaTotal = 0;
var ninjaBPS = 1000000;
var wizardPrice = 5000000000;
var wizardTotal = 0;
var wizardBPS = 25000000;
var dartpowerUpgrade = false


function loadDarts() { //updates the HTML elements related to Dart Monkey affter loading
	savedDarts = localStorage.darts;
	dartTotal = parseInt(savedDarts);
	dartPrice = Math.ceil(50 * 1.15**dartTotal);
	dartpowerUpgrade = (localStorage.dartpower == 'true');
	console.log(dartpowerUpgrade)
	if(dartpowerUpgrade){
		dartBPS = dartBPS * 2;
	}
	document.getElementById("dartMonkey").innerHTML = 'Buy a Dart Monkey for ' + dartPrice + ' Bloons';
	document.getElementById("dartAmmount").innerHTML = 'you have ' + dartTotal + ' Dart Monkeys';
	document.getElementById("dartProduce").innerHTML = 'Pops ' + (dartBPS * dartTotal).toFixed(1) + ' bloons per second';
}

function loadTacks() { //updates the HTML elements related to Tack Shooter affter loading
	savedTacks = localStorage.tacks;
	tackTotal = parseInt(savedTacks);
	tackPrice = Math.ceil(250 * 1.15**tackTotal);
	document.getElementById("tackShooter").innerHTML = 'Buy a Tack Shooter for ' + tackPrice + ' Bloons';
	document.getElementById("tackAmmount").innerHTML = 'you have ' + tackTotal + ' Tack Shooters';
	document.getElementById("tackProduce").innerHTML = 'Pops ' + (tackBPS * tackTotal).toFixed(1) + ' bloons per second';
}

function loadSnipers() {
	savedSnipers = localStorage.snipers;
	sniperTotal = parseInt(savedSnipers);
	sniperPrice = Math.ceil(1000 * 1.15**sniperTotal);
	document.getElementById("sniperMonkey").innerHTML = 'Buy a Sniper Monkey for ' + sniperPrice + ' Bloons';
	document.getElementById("sniperAmmount").innerHTML = 'you have ' + sniperTotal + ' Sniper Monkeys';
	document.getElementById("sniperProduce").innerHTML = 'Pops ' + (sniperBPS * sniperTotal).toFixed(1) + ' bloons per second';
}

function addBloons() { //function for clicking
	bloons = bloons + clickStr;
	//console.log(getCookie("bloons"))l;
	document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
}

function buyDart() { //function for buying more Dart Monkeys
	if(bloons >= dartPrice) {
		bloons = bloons - dartPrice;
		dartTotal = dartTotal + 1;
		dartPrice = Math.ceil(50 * 1.11**dartTotal);
		document.getElementById("dartMonkey").innerHTML = 'Buy a Dart Monkey for ' + dartPrice + ' Bloons';
		document.getElementById("dartAmmount").innerHTML = 'You have ' + dartTotal + ' Dart Monkeys';
		document.getElementById("dartProduce").innerHTML = 'Pops ' + (dartBPS * dartTotal).toFixed(1) + ' bloons per second';
	}
}

function buyTack() { //Function for buying more Tack Shooters
	if(bloons >= tackPrice) {
		bloons = bloons - tackPrice;
		tackTotal = tackTotal + 1;
		tackPrice = Math.ceil(250 * 1.15**tackTotal);
		document.getElementById("tackShooter").innerHTML = 'Buy a Tack Shooter for ' + tackPrice + ' Bloons';
		document.getElementById("tackAmmount").innerHTML = 'You have ' + tackTotal + ' Tack Shooters';
		document.getElementById("tackProduce").innerHTML = 'Pops ' + (tackBPS * tackTotal).toFixed(1) + ' bloons per second';
	}
}

function buySniper() {
	if(bloons >= sniperPrice) {
		bloons = bloons - sniperPrice;
		sniperTotal = sniperTotal + 1;
		sniperPrice = Math.ceil(1000 * 1.15**sniperTotal);
		document.getElementById("sniperMonkey").innerHTML = 'Buy a Sniper Monkey for ' + sniperPrice + ' Bloons';
		document.getElementById("sniperAmmount").innerHTML = 'You have ' + sniperTotal + ' Sniper Monkeys';
		document.getElementById("sniperProduce").innerHTML = 'Pops ' + (sniperBPS * sniperTotal).toFixed(1) + ' bloons per second';
	}
}

function buyBoomerang() {
	if(bloons >= boomerangPrice) {
		bloons = bloons - boomerangPrice;
		boomerangTotal = boomerangTotal + 1;
		boomerangPrice = Math.ceil(10000 * 1.15**boomerangTotal);
		document.getElementById("boomerangMonkey").innerHTML = 'Buy a Boomerang Thrower for ' + boomerangPrice + ' Bloons';
		document.getElementById("boomerangAmmount").innerHTML = 'You have ' + boomerangTotal + ' Boomerang Throwers';
		document.getElementById("boomerangProduce").innerHTML = 'Pops ' + (boomerangBPS * boomerangTotal).toFixed(1) + ' bloons per second';
	}
}

function buyBomb() {
	if(bloons >= bombPrice) {
		bloons = bloons - bombPrice;
		bombTotal = bombTotal + 1;
		bombPrice = Math.ceil(100000 * 1.15**bombTotal);
		document.getElementById("bombShooter").innerHTML = 'Buy a Bomb Tower for ' + bombPrice + ' Bloons';
		document.getElementById("bombAmmount").innerHTML = 'You have ' + bombTotal + ' Bomb Towers';
		document.getElementById("bombProduce").innerHTML = 'Pops ' + (bombBPS * bombTotal).toFixed(1) + ' bloons per second';
	}
}

function buyGlue() {
	if(bloons >= gluePrice) {
		bloons = bloons - gluePrice;
		glueTotal = glueTotal + 1;
		gluePrice = Math.ceil(1000000 * 1.15**glueTotal);
		document.getElementById("glueGunner").innerHTML = 'Buy an Glue Gunner for ' + gluePrice + ' Bloons';
		document.getElementById("glueAmmount").innerHTML = 'You have ' + glueTotal + ' Glue Gunners';
		document.getElementById("glueProduce").innerHTML = 'Pops ' + (glueBPS * glueTotal).toFixed(1) + ' bloons per second';
	}
}

function buyIce() {
	if(bloons >= icePrice) {
		bloons = bloons - icePrice;
		iceTotal = iceTotal + 1;
		gluePrice = Math.ceil(15000000 * 1.15**iceTotal);
		document.getElementById("iceMonkey").innerHTML = 'Buy an Ice Monkey for ' + icePrice + ' Bloons';
		document.getElementById("iceAmmount").innerHTML = 'You have ' + iceTotal + ' Ice Monkeys';
		document.getElementById("iceProduce").innerHTML = 'Pops ' + (iceBPS * iceTotal).toFixed(1) + ' bloons per second';
	}
}

function buyNinja() {
	if(bloons >= ninjaPrice) {
		bloons = bloons - ninjaPrice;
		ninjaTotal = ninjaTotal + 1;
		gluePrice = Math.ceil(250000000 * 1.15**ninjaTotal);
		document.getElementById("ninjaMonkey").innerHTML = 'Buy a Ninja Monkey for ' + ninjaPrice + ' Bloons';
		document.getElementById("ninjaAmmount").innerHTML = 'You have ' + ninjaTotal + ' Ninja Monkeys';
		document.getElementById("ninjaProduce").innerHTML = 'Pops ' + (ninjaBPS * ninjaTotal).toFixed(1) + ' bloons per second';
	}
}


window.setInterval(function() { //Adds together all the Bloons and then updates the elements in the HTML
	  bloons = (bloons + (dartTotal * dartBPS) + (tackTotal * tackBPS) + (sniperTotal * sniperBPS) + (boomerangTotal * boomerangBPS) + (bombTotal * bombBPS) + (glueTotal * glueBPS) + (iceTotal * iceBPS) + (ninjaTotal * ninjaBPS));
		totalBPS = ((dartTotal * dartBPS) + (tackTotal * tackBPS) + (sniperTotal * sniperBPS) + (boomerangTotal * boomerangBPS) + (bombTotal * bombBPS) + (glueTotal * glueBPS) + (iceTotal * iceBPS) + (ninjaTotal * ninjaBPS));
		document.getElementById("bloonspersec").innerHTML = totalBPS.toFixed(1) + ' bloons per second'
		document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
		document.cookie = "bloons=" + bloons.toFixed(1);
}, 1000); // dont change this to anything other than 1000 lol

window.setInterval(function() {
	document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
}, refreshRateVar);


/*
----This section represents the Upgrades page of the javascript----
*/
function checkUpgrades() {
	console.log(dartpowerUpgrade);
	if(dartTotal >= 1 && dartpowerUpgrade != true) {
		var dartpowerElements = document.getElementsByClassName("dartpower");
		for (i = 0; i < dartpowerElements.length; i++){
			dartpowerElements[i].style.display = "inline";
		}
	}
}

function dartpower() {
	var dartpowerCost = 100
	if(bloons >= dartpowerCost) {
		bloons = bloons - dartpowerCost;
		dartpower = true;
		localStorage.setItem("dartpower", true);
		dartBPS = dartBPS * 2;
		var dartpowerElements = document.getElementsByClassName("dartpower");
		for (i = 0; i < dartpowerElements.length; i++){
			dartpowerElements[i].style.display = "none";
		}
	}
}

function dartpower2() {
	var dartpower2Cost = 1000
	if(bloons >= dartpower2Cost) {
		bloons = bloons - dartpower2Cost;
		dartpower = true;
		localStorage.setItem("dartpower2", true);
		dartBPS = dartBPS * 2;
		var dartpower2Elements = document.getElementsByClassName("dartpower2");
		for (i = 0; i < dartpower2Elements.length; i++){
			dartpower2Elements[i].style.display = "none";
		}
	}
}

function clickHarder() { // Upgrade click ability

	if (bloons >= clickCost) {
		bloons = bloons - clickCost;
		clickStr = clickStr + 1;
		clickCost = clickCost*1.5;
		localStorage.setItem("clickStr", clickStr); localStorage.setItem("clickCost", clickCost);
		document.getElementById("clickCostDisplay").innerHTML = "Current level: " + clickStr.toFixed(1) + " Cost for next level: " + clickCost.toFixed(1);
	}
}

/*
	This section represents the functions for the options tab
*/

function resetGame() {
	if(confirm("Do you want to reset the game?")){
		localStorage.clear();
		resetVariables();
		location.reload();
	}
	else {

	}
}

function resetVariables(){
	var totalBPS = 0;
        var bloons = 0;
        var bloonstext = document.getElementById("bloons");
        var clickStr = 1;
        var clickCost = 100;
        var refreshRateVar = 100;
        var dartPrice = 50;
        var dartTotal = 0;
        var dartBPS = 1;
        var tackPrice = 250;
        var tackTotal = 0;
        var tackBPS = 5;
        var sniperPrice = 1000;
        var sniperTotal = 0;
        var sniperBPS = 20;
        var dartpowerUpgrade = false
}

function refreshRate() {
	// hey should you use the same name for functions and variables? maybe
	refreshRateVar = parseInt(document.getElementById("refreshRate").value);
	document.getElementById("refreshRate").value;
}

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
var dartpowerUpgrade = false

function loadSave() { //loads the saved values from local storage
	if(localStorage.bloons) { //checks for a local save
		savedPoints = localStorage.bloons;
		points = parseInt(savedBloons); clickStr = parseInt(localStorage.clickStr); clickCost = parseInt(localStorage.clickCost);
		loadDarts();
		loadTacks();
		loadSnipers();
	}
	else {

	}
}

function loadDarts() { //updates the HTML elements related to David affter loading
	savedDarts = localStorage.darts;
	dartTotal = parseInt(savedDarts);
	dartPrice = Math.ceil(50 * 1.15**dartTotal);
	dartpowerUpgrade = (localStorage.dartpower == 'true');
	console.log(dartpowerUpgrade)
	if(dartpowerUpgrade){
		dartBPS = dartBPS * 3;
	}
	document.getElementById("dartMonkey").innerHTML = 'Buy a Dart Monkey for ' + dartPrice + ' Bloons';
	document.getElementById("dartAmmount").innerHTML = 'you have ' + dartTotal + ' Dart Monkeys';
	document.getElementById("dartProduce").innerHTML = 'Pops ' + (dartBPS * dartTotal).toFixed(1) + ' bloons per second';
}

function loadTacks() { //updates the HTML elements related to izzy affter loading
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

function buyDart() { //function for buying more davids
	if(bloons >= dartPrice) {
		bloons = bloons - dartPrice;
		dartTotal = dartTotal + 1;
		dartPrice = Math.ceil(50 * 1.15**dartTotal);
		document.getElementById("dartMonkey").innerHTML = 'Buy a Dart Monkey for ' + dartPrice + ' Bloons';
		document.getElementById("dartAmmount").innerHTML = 'you have ' + dartTotal + ' Dart Monkeys';
		document.getElementById("dartProduce").innerHTML = 'Pops ' + (dartBPS * dartTotal).toFixed(1) + ' bloons per second';
	}
}

function buyTack() { //Function for buying more izzys
	if(bloons >= tackPrice) {
		bloons = bloons - tackPrice;
		tackTotal = tackTotal + 1;
		tackPrice = Math.ceil(250 * 1.15**tackTotal);
		document.getElementById("tackShooter").innerHTML = 'Buy a Tack Shooter for ' + tackPrice + ' Bloons';
		document.getElementById("tackAmmount").innerHTML = 'you have ' + tackTotal + ' Tack Shooters';
		document.getElementById("tackProduce").innerHTML = 'Pops ' + (tackBPS * tackTotal).toFixed(1) + ' bloons per second';
	}
}

function buySniper() {
	if(bloons >= sniperPrice) {
		bloons = bloons - sniperPrice;
		sniperTotal = sniperTotal + 1;
		sniperPrice = Math.ceil(1000 * 1.15**sniperTotal);
		document.getElementById("sniperMonkey").innerHTML = 'Buy a Sniper Monkey for ' + sniperPrice + ' Bloons';
		document.getElementById("sniperAmmount").innerHTML = 'you have ' + sniperTotal + ' Sniper Monkeys';
		document.getElementById("sniperProduce").innerHTML = 'Pops ' + (sniperBPS * sniperTotal).toFixed(1) + ' bloons per second';
	}
}

window.setInterval(function() { //Adds together all the Bloons and then updates the elements in the HTML
	  bloons = (bloons + (dartTotal * dartBPS) + (tackTotal * tackBPS) + (sniperTotal * sniperBPS));
		totalBPS = ((dartTotal * dartBPS) + (tackTotal * tackBPS) + (sniperTotal * sniperBPS));
		document.getElementById("bloonspersec").innerHTML = totalBPS.toFixed(1) + ' bloons per second'
		document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
		document.cookie = "bloons=" + bloons.toFixed(1);
}, 1000); // dont change this to anything other than 1000 lol

window.setInterval(function() {
	document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
}, refreshRateVar);

window.setInterval(function() { //Saves game data every 15 seconds
	localStorage.setItem("bloons", bloons);
	localStorage.setItem("dartMonkeys", dartTotal);
	localStorage.setItem("tackShooters", tackTotal);
	localStorage.setItem("sniperMonkeys", sniperTotal);
	console.log("Game Saved");
}, 15000);


/*
----This section represents the Upgrades page of the javascript----
*/
function checkUpgrades() {
	console.log(davidredbullUpgrade);
	if(davidTotal >= 1 && davidredbullUpgrade != true) {
		var davidredbullElements = document.getElementsByClassName("davidRedbull");
		for (i = 0; i < davidredbullElements.length; i++){
			davidredbullElements[i].style.display = "inline";
		}
	}
}

function davidRedBull() {
	var davidredbullCost = 100
	if(points >= davidredbullCost) {
		points = points - davidredbullCost;
		davidredbull = true;
		localStorage.setItem("davidredbull", true);
		davidLPS = davidLPS * 2;
		var davidredbullElements = document.getElementsByClassName("davidRedbull");
		for (i = 0; i < davidredbullElements.length; i++){
			davidredbullElements[i].style.display = "none";
		}
	}
}

function clickHarder() { // Upgrade click ability

	if (bloons >= clickCost) {
		bloons = bloons - clickCost;
		clickStr = clickStr + 1;
		clickCost = clickCost*2.75;
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
	var totalLPS = 0;
	var points = 0;
	var pointstext = document.getElementById("points");
	var clickStr = 1;
	var clickCost = 50;
	var refreshRateVar = 100;
	var davidPrice = 10;
	var davidTotal = 0;
	var davidLPS = 0.1;
	var izzyPrice = 100;
	var izzyTotal = 0;
	var izzyLPS = 1;
	var nicolePrice = 1100;
	var nicoleTotal = 0;
	var nicoleLPS = 8;
	var davidredbullUpgrade = false
}

function refreshRate() {
	// hey should you use the same name for functions and variables? maybe
	refreshRateVar = parseInt(document.getElementById("refreshRate").value);
	document.getElementById("refreshRate").value;
}

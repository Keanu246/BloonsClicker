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
var davidredbullUpgrade = false

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
	document.getElementById("dartProduce").innerHTML = 'Writing ' + (dartBPS * dartTotal).toFixed(1) + ' bloons per second';
}

function loadIzzys() { //updates the HTML elements related to izzy affter loading
	savedIzzys = localStorage.izzys;
	izzyTotal = parseInt(savedIzzys);
	izzyPrice = Math.ceil(100 * 1.15**izzyTotal);
	document.getElementById("izzy").innerHTML = 'Buy an izzy for ' + izzyPrice + ' Lines of code';
	document.getElementById("izzyAmmount").innerHTML = 'you have ' + izzyTotal + ' Izzys';
	document.getElementById("izzyProduce").innerHTML = 'Writing ' + (izzyLPS * izzyTotal).toFixed(1) + ' lines of code per second';
}

function loadNicoles() {
	savedNicoles = localStorage.nicoles;
	nicoleTotal = parseInt(savedNicoles);
	nicolePrice = Math.ceil(1100 * 1.15**nicoleTotal);
	document.getElementById("nicole").innerHTML = 'Buy a Nicole for ' + nicolePrice + ' Lines of code';
	document.getElementById("nicoleAmmount").innerHTML = 'you have ' + nicoleTotal + ' Nicoles';
	document.getElementById("nicoleProduce").innerHTML = 'Writing ' + (nicoleLPS * nicoleTotal).toFixed(1) + ' Lines of code per second';
}

function addPoints() { //function for clicking
	points = points + clickStr;
	//console.log(getCookie("points"))l;
	document.getElementById("points").innerHTML = points.toFixed(1) + ' Lines of code';
}

function buyDavid() { //function for buying more davids
	if(points >= davidPrice) {
		points = points - davidPrice;
		davidTotal = davidTotal + 1;
		davidPrice = Math.ceil(10 * 1.15**davidTotal);
		document.getElementById("david").innerHTML = 'Buy a David for ' + davidPrice + ' Lines of code';
		document.getElementById("davidAmmount").innerHTML = 'you have ' + davidTotal + ' Davids';
		document.getElementById("davidProduce").innerHTML = 'Writing ' + (davidLPS * davidTotal).toFixed(1) + ' lines of code per second';
	}
}

function buyIzzy() { //Function for buying more izzys
	if(points >= izzyPrice) {
		points = points - izzyPrice;
		izzyTotal = izzyTotal + 1;
		izzyPrice = Math.ceil(100 * 1.15**izzyTotal);
		document.getElementById("izzy").innerHTML = 'Buy an izzy for ' + izzyPrice + ' Lines of code';
		document.getElementById("izzyAmmount").innerHTML = 'you have ' + izzyTotal + ' Izzys';
		document.getElementById("izzyProduce").innerHTML = 'Writing ' + (izzyLPS * izzyTotal).toFixed(1) + ' lines of code per second';
	}
}

function buyNicole() {
	if(points >=nicolePrice) {
		points = points - nicolePrice;
		nicoleTotal = nicoleTotal + 1;
		nicolePrice = Math.ceil(1100 * 1.15**nicoleTotal);
		document.getElementById("nicole").innerHTML = 'Buy a Nicole for ' + nicolePrice + ' Lines of code';
		document.getElementById("nicoleAmmount").innerHTML = 'you have ' + nicoleTotal + ' Nicoles';
		document.getElementById("nicoleProduce").innerHTML = 'Writing ' + (nicoleLPS * nicoleTotal).toFixed(1) + ' Lines of code per second';
	}
}

window.setInterval(function() { //Adds together all the Lines of Code and then updates the elements in the HTML
	  points = (points + (davidTotal * davidLPS) + (izzyTotal * izzyLPS) + (nicoleTotal * nicoleLPS));
		totalLPS = ((davidTotal * davidLPS) + (izzyTotal * izzyLPS) + (nicoleLPS * nicoleTotal));
		document.getElementById("codepersec").innerHTML = totalLPS.toFixed(1) + ' Lines per second'
		document.getElementById("points").innerHTML = points.toFixed(1) + ' Lines of code';
		document.cookie = "points=" + points.toFixed(1);
}, 1000); // dont change this to anything other than 1000 lol

window.setInterval(function() {
	document.getElementById("points").innerHTML = points.toFixed(1) + ' Lines of code';
}, refreshRateVar);

window.setInterval(function() { //Saves game data every 15 seconds
	localStorage.setItem("linesofcode", points);
	localStorage.setItem("davids", davidTotal);
	localStorage.setItem("izzys", izzyTotal);
	localStorage.setItem("nicoles", nicoleTotal);
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

	if (points >= clickCost) {
		points = points - clickCost;
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

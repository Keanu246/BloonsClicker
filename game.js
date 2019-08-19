//The timer to run code every second
var Timer = window.setInterval(function(){Tick()}, 1000);
var buildings = [];

//The object declaration for game saves
function GameSave() {
	this.money = 0;
	this.buildings = [];
	for (var i = 0;i < buildings.length;i++) {
		this.buildings[i] = 0;
	}
}

//The object declaration for buildings
function Building() {
	this.Name = "Lemonade Stand";
	this.Cost = 10;
	this.PerSec = 1;
}

//The function to initialise all buildings
function InitBuildings() {
	LoadBuilding("Lemonade Stand",10,1);
}

//The function to automatically load a building into the buildings array
function LoadBuilding(name,cost,persec) {
	var cur = buildings.length;
	
	buildings[cur] = new Building();
	buildings[cur].Name = name;
	buildings[cur].Cost = cost;
	buildings[cur].PerSec = persec;
}

//The function used to gather money
function GatherMoney() {
	game.money++; //++ tells javascript to add 1 to the variable
	
	//Display the player's current money
	document.getElementById("money").innerHTML = game.money;
}

//The function that gets run every second
function Tick() {
	for (var i = 0;i < buildings.length;i++) {
		game.money += game.buildings[i] * buildings[i].PerSec;
	}
	document.getElementById("money").innerHTML = game.money;
}

//The function to buy a lemonade stand
function Build(id) {
	if (game.money >= buildings[id].Cost) { //Check if the player has enough money, then subtract it and add a new building if they do
		game.money -= buildings[id].Cost;
		game.buildings[id] = game.buildings[id] + 1;
		document.getElementById("money").innerHTML = game.money;
		document.getElementById("Building1Qty").innerHTML = game.buildings[id];
	}
}

//Run this code once the page has loaded fully
window.onload = function() {
	InitBuildings();
	window.game = new GameSave();
};

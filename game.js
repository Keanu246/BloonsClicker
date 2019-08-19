var money = 0;
function GatherMoney(money = money + 1;)
document.getElementById("money").innerHTML = money;
var money = 0;
var Timer = window.setInterval(function(){Tick()}, 1000);

function GatherMoney() {
	money = money + 1;
	document.getElementById("money").innerHTML = money;
}

function Tick() {
	money++;
	document.getElementById("money").innerHTML = money;
}

var Building1Name = "Dart Monkey";
var Building1Cost = 10;
var Building1PerSec = 1;
var Building1Qty = 0;

if (money >= Building1Cost) {	
money = money - Building1Cost;
Building1Qty = Building1Qty + 1;
document.getElementById("money").innerHTML = money;
document.getElementById("Building1Qty").innerHTML = Building1Qty

}

function GameSave() {
    this.money = 0;
}

window.onload = function() {
    window.game = new GameSave();
};

function Building() {
    this.name = "Dart Monkey";
    this.cost = 10;
    this.persec = 1;
    this.qty = 0;
}

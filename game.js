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

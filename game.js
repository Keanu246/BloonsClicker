var money = 0;
function GatherMoney()
money = money + 1;
<div class="label">Money</div>
<div id="money" class="label">0</div>
document.getElementById("money").innerHTML = money;

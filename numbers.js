var formatBloons = function () {
    document.getElementById("bloons").innerHTML = numberformat.format(bloons)
    document.getElementById("bloonspersecond").innerHTML = numberformat.format(bloonspersecond)
    document.getElementById("clickCostDisplay").innerHTML = numberformat.format(clickCostDisplay)
    document.getElementById("dartMonkey").innerHTML = numberformat.format(dartPrice)
    document.getElementById("dartProduce").innerHTML = numberformat.format(dartBPS)
}

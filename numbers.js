function formatBloons(){
    if(formatNumber){
      formatNumber = true;
      document.getElementById("format").innerHTML = "Format";
    }
    else if(formatNumber){
      document.getElementById("bloons").innerHTML = numberformat.format(bloons);
      document.getElementById("bloonspersecond").innerHTML = numberformat.format(totalBPS);
      document.getElementById("clickCostDisplay").innerHTML = numberformat.format(clickCost);
      document.getElementById("dartMonkey").innerHTML = numberformat.format(dartPrice);
      document.getElementById("dartProduce").innerHTML = numberformat.format(dartBPS);
      document.getElementById("tackShooter").innerHTML = numberformat.format(tackPrice);
      document.getElementById("tackProduce").innerHTML = numberformat.format(tackBPS);
      document.getElementById("sniperMonkey").innerHTML = numberformat.format(sniperPrice);
      document.getElementById("sniperProduce").innerHTML = numberformat.format(sniperBPS);
      document.getElementById("boomerangMonkey").innerHTML = numberformat.format(boomerangPrice);
      document.getElementById("boomerangProduce").innerHTML = numberformat.format(boomerangBPS);
   }
}

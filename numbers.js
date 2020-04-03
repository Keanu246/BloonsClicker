var formatNumber = false

function formatBloons(){
   if(formatNumber){
      formatNumber = false;
      document.getElementById("format").innerHTML = "Format";
   }
   else{
      formatNumber = true;
      document.getElementById("format").innerHTML = "Formated!";
   }
}

function formatValue(){
   if(formatNumber){
      document.getElementById("bloons").innerHTML = numberformat.format(bloons, {format: 'scientific'})
      document.getElementById("bloonspersecond").innerHTML = numberformat.format(totalBPS, {format: 'scientific'})
   }
   else{
      document.getElementById("bloons").innerHTML = numberformat.format(bloons);
      document.getElementById("bloonspersecond").innerHTML = numberformat.format(totalBPS);
   }
}

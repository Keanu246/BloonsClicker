function formatBloons(){
    if(formatNumber){
      formatNumber = true;
      document.getElementById("format").innerHTML = "Formated!";
    }
    else if(formatNumber){
      document.getElementById("bloons").innerHTML = numberformat.format(bloons);
      document.getElementById("bloonspersecond").innerHTML = numberformat.format(totalBPS);
   }
}

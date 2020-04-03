function formatBloons(){
   if(formatNumber){
      formatNumber = true;
      document.getElementById("format").innerHTML = "Formated to Normal!";
      document.getElementById("bloons").innerHTML = numberformat.format(bloons);
   }
   else{
      formatNumber = false;
      document.getElementById("format").innerHTML = "Formated to Scientific!";
      document.getElementById("bloonspersecond").innerHTML = numberformat.format(bloons, {format: 'scientific'}) 
   }
}

var formatBloons = document.getElementById("bloons").innerHTML = numberformat.format(bloons);

function formatValue(){
   if(formatBloons){
      document.getElementById("format").innerHTML = "Formated!";
      document.getElementById("bloons").innerHTML = numberformat.format(bloons);
   }
}

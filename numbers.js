var formatBloons = document.getElementById("bloons").innerHTML = numberformat.format(bloons);
var formatNumber = false;

function formatValue(){
   if(formatBloons){
      formatNumber = false;
      document.getElementById("format").innerHTML = "Format!";
   }
   else{
      formatNumber = true;
      document.getElementById("format").innerHTML = "Formated!";
   }
}

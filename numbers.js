var formatNumber = false

function formatBloons(){
   if(formatNumber){
      formatNumber = false;
      document.getElementById("format").innerHTML = "Format";
      document.getElementById("bloons").innerHTML = numberformat.format(bloons, {format: 'scientific'})
   }
   else{
      formatNumber = true;
      document.getElementById("format").innerHTML = "Formated!";
      document.getElementById("bloons").innerHTML = numberformat.format(bloons);
   }
}

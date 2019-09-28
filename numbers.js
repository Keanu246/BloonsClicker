var ranges = [
    { divider: 1000000000000000000000000000000000 , suffix: 'D' },
    { divider: 1000000000000000000000000000000 , suffix: 'N' },
    { divider: 1000000000000000000000000000 , suffix: 'O' },
    { divider: 1000000000000000000000000 , suffix: 'SS' },
    { divider: 1000000000000000000000 , suffix: 'S' },
    { divider: 1000000000000000000 , suffix: 'QQ' },
    { divider: 1000000000000000 , suffix: 'Q' },
    { divider: 1000000000000 , suffix: 'T' },
    { divider: 1000000000 , suffix: 'B' },
    { divider: 1000000 , suffix: 'M' },
    { divider: 1000 , suffix: 'K' },
];

function INP(number, round) {
  for (var i = 0; i < ranges.length; i++) {
    if (number >= ranges[i].divider) {
      if (round == '') {
        return (number / ranges[i].divider) + ranges[i].suffix;
      } else {
        var res = (number / ranges[i].divider).toFixed(round),
          fr = res - parseInt(res, 10);
        return (fr > 0 ? res : parseInt(res, 10)) + ranges[i].suffix;
      }
    }
  }
  return number.toString();
}

var notation = true;

if(notation){ 
        document.getElementById("bloons").innerHTML = numberformat.format(dartBPS * dartPrice) + (tackBPS * tackPrice) 
    }
    document.getElementById("bloons").innerHTML = (dartBPS * dartPrice) + (tackBPS * tackPrice)
    valueSet(); 
  } 

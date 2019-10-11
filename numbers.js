var formatNumberPostfix = function (number) {
    if (typeof number !== "number") {
      return 0;
    }

    var prefixes = [
      { magnitude: 1e93, label: 'trigintillion' },
      { magnitude: 1e90, label: 'novemvigintillion' },
      { magnitude: 1e87, label: 'octovigintillion' },
      { magnitude: 1e84, label: 'septenvigintillion' },
      { magnitude: 1e81, label: 'sexvigintillion' },
      { magnitude: 1e78, label: 'quinvigintillion' },
      { magnitude: 1e75, label: 'quattuorvigintillion' },
      { magnitude: 1e72, label: 'tresvigintillion' },
      { magnitude: 1e69, label: 'duovigintillion' },
      { magnitude: 1e66, label: 'unvigintillion' },
      { magnitude: 1e63, label: 'vigintillion' },
      { magnitude: 1e60, label: 'novemdecillion' },
      { magnitude: 1e57, label: 'octodecillion' },
      { magnitude: 1e54, label: 'septendecillion' },
      { magnitude: 1e51, label: 'sexdecillion' },
      { magnitude: 1e48, label: 'quindecillion' },
      { magnitude: 1e45, label: 'quattourdecillion' },
      { magnitude: 1e42, label: 'tredecillion' },
      { magnitude: 1e39, label: 'duodecillion' },
      { magnitude: 1e36, label: 'undecillion' },
      { magnitude: 1e33, label: 'decillion' },
      { magnitude: 1e30, label: 'nonillion' },
      { magnitude: 1e27, label: 'octillion' },
      { magnitude: 1e24, label: 'septillion' },
      { magnitude: 1e21, label: 'sextillion' },
      { magnitude: 1e18, label: 'quintillion' },
      { magnitude: 1e15, label: 'quadrillion' },
      { magnitude: 1e12, label: 'trillion' },
      { magnitude:  1e9, label: 'billion' }
    ];

    var abs = Math.abs(number);
    for (var i = 0; i < prefixes.length; i++) {
      if (abs >= prefixes[i].magnitude) {
        return (number / prefixes[i].magnitude).toFixed(1) + prefixes[i].label;
      }
    }
    return number; 
  }

  var formatTime = function (msec) {
    var totals = Math.ceil(msec / 1000);
    var days = Math.floor(totals / (24 * 60 * 60));
    var hours = Math.floor((totals % (24 * 60 * 60)) / (60 * 60));
    var totalmin = (totals % (24 * 60 * 60)) % (60 * 60);
    var mins = Math.floor(totalmin / 60);
    var secs = totalmin % 60;

    var str = [];
    if (days > 0) {
      str.push(days + ' day' + (days % 100 == 1 ? '' : 's'));
    }
    if (hours > 0) {
      str.push(hours + ' h');
    }
    if (mins > 0) {
      str.push(mins + ' min');
    }
    if (secs > 0) {
      str.push(secs + ' s');
    }

    return str.join(', ');
  };

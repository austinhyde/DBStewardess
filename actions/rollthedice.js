module.exports = function(dbstewardess, data) {
  var n = parseInt(data.matches[1]);
  var d = parseInt(data.matches[2]);
  if (isNaN(n) || isNaN(d)) {
    return;
  }

  var ns = [], sum = 0;
  for (; n > 0; n--) {
    var x = Math.floor(Math.random() * d) + 1;
    ns.push(x);
    sum += x;
  }

  dbstewardess.announce('' + n + 'd' + d + ' = ' + ns.join(' + ') + ' = ' + sum);
};
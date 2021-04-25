export async function solve9() {
  var n = 1000;
  var max = -1;
  for (var i = 3; i < n / 3; i++) {
    for (var j = i + 1; j < n - (i + j); j++) {
      var k = n - (i + j);
      if (Math.sqrt(i * i + j * j) === k) {
        var product = i * j * k;
        max = product > max ? product : max;
      }
    }
  }
  return max;
}

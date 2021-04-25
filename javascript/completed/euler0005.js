function isPow(n, b) {
  if (n === 1) {
    return true;
  }
  if (n % b === 0) {
    return isPow(n / b, b);
  }
  return false;
}

export async function solve5() {
  var n = 20;
  var multMap = [1, 2];
  for (var i = 3; i <= n; i++) {
    var isPrime = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        multMap.push(multMap[i - 2] * (isPow(i, j) ? j : 1));
        break;
      }
    }
    if (isPrime) {
      multMap.push(multMap[i - 2] * i);
    }
  }
  return multMap.pop();
}

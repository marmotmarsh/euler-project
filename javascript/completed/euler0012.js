function findFactors(n) {
  var sqrt = Math.sqrt(n);
  var count = 0;
  for (var i = 1; i < sqrt; i++) {
    if (n % i === 0) {
      count += 2;
    }
  }
  if (n % sqrt === 0) {
    count++;
  }
  return count;
}

export async function solve12() {
  var n = 500;
  var factorMap = { 1: 3 };
  var numDivs = 2;
  var tri = 2;
  var triSum = 3;
  while (numDivs <= n) {
    tri++;
    triSum += tri;
    var factors = findFactors(triSum);
    while (numDivs < factors) {
      factorMap[numDivs] = triSum;
      numDivs++;
    }
  }
  return factorMap[n];
}

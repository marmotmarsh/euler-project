function reverseNumber(n) {
  var orig = n;
  var result = 0;
  while (orig > 0) {
    result = result * 10 + (orig % 10);
    orig = (orig / 10) | 0;
  }
  return result;
}

export async function solve4(n) {
  var pals = {};
  for (var i = 101; i <= 999; i++) {
    if (i % 10 === 0) {
      continue;
    }
    for (var j = i; j <= 999; j++) {
      if (i % 10 === 0) {
        continue;
      }
      var product = i * j;
      if (product >= n) {
        break;
      }
      if (product === reverseNumber(product)) {
        pals[product] = true;
      }
    }
  }
  return Object.keys(pals).sort((a, b) => b - a)[0];
}

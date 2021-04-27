import BigNumber from 'bignumber.js';

export async function solve10() {
  var n = 2000000;
  var primes = [0, 2, 3];
  var next = 5;
  while (next <= n) {
    var powz = Math.sqrt(next);
    var toPush = 0;
    for (var i = 0; i <= primes.length; i++) {
      if (primes[i] <= powz) {
        if (next % primes[i] === 0) {
          break;
        }
      } else {
        toPush = next;
        break;
      }
    }
    primes.push(0);
    primes.push(toPush);
    next += 2;
  }
  return primes.reduce((sum, v) => sum + v, 0);
}

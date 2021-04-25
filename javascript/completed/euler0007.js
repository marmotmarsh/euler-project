export async function solve7() {
  var n = 10001;
  var primes = [2, 3];
  var i = 3;
  while (primes.length < n) {
    i += 2;
    var sqtI = Math.sqrt(i);
    var maybeNonPrime = primes.find((v) => i % v === 0 || v > sqtI);
    if (maybeNonPrime > sqtI) {
      primes.push(i);
    }
  }
  return primes.pop();
}

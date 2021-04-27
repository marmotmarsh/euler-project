export async function solve3() {
  var n = 600851475143;
  var max = 1;
  while (n > max) {
    max += 1;
    while (n % max === 0) {
      n = n / max;
    }
  }
  return max;
}

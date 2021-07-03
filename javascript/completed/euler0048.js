export function solve48() {
  const numDigits = 10;
  const lastTerm = 1000;
  let sum = 0;
  const cap = Math.pow(10, numDigits);

  for (let i = 1; i <= lastTerm; i++) {
    let termSum = 1;
    for (let _j = 0; _j < i; _j++) {
      termSum = (termSum * i) % cap;
    }
    sum = (sum + termSum) % cap;
  }

  return sum;
}

import fs from 'fs';

function isPrime(n, allPrimes) {
  let nextPrime;
  do {
    nextPrime = parseInt(allPrimes.shift(), 10);
  } while (nextPrime < n);

  return nextPrime === n;
}

export function solve58() {
  const n = 0.55;
  let term = 1;
  let sideLength = 0;
  let allTermsCount = 1;
  let allPrimesCount = 1;

  const file = fs.readFileSync('./data/primes1000000.txt', {
    encoding: 'utf-8',
  });
  let allPrimes = file.trim().split(/\s+/);

  while (allPrimesCount / allTermsCount >= n) {
    sideLength += 2;
    allTermsCount += 4;
    for (let _i = 0; _i < 4; _i++) {
      term += sideLength;
      if (isPrime(term, allPrimes)) {
        allPrimesCount++;
      }
    }
  }

  return sideLength + 1;
}

// solve58();

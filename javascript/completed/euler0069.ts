import { isPrime } from "../util.ts";

const maxN = 1000000;
let n = 1;
let primes = [2];
let primesIndex = 0;
let nextPrime = 2;

for (let i = 3; i < maxN; i+=2) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

while (n * nextPrime < maxN) {
    n*=nextPrime;
    primesIndex++;
    nextPrime = primes[primesIndex];
}

while (primesIndex > 0) {
    primesIndex--;
    nextPrime = primes[primesIndex];
    while (n * nextPrime < maxN) {
        n*=nextPrime;
    }
}

console.log(n);
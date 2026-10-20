import { isPrime, getProperDivisors } from '../util.ts';

let max = 10000000;

for (let i = 2; i < max; i++) {
    if (isPrime(i)) {
        continue;
    }
}

let x = getProperDivisors(24)

console.log(x);
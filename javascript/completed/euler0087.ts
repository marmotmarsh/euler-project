import { isPrime } from "../util.ts";
import _ from 'lodash';

// a^2 + b^3 + c^4

let primes: number[] = [2];
let primePowerTriples: number[] = [];
const maxN = 50000000;

function primePowerTrip(a: number, b: number, c: number): number {
    const result = (a * a) + (b * b * b) + (c * c * c * c);
    // console.log("PPT Time: ", a, b, c, result);
    return result;
}

for (let i = 3; i < Math.ceil(Math.sqrt(maxN)); i += 2) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

// console.log("Primes: ", primes.length);

for (let c = 0; c < primes.length; c++) {
    for (let b = 0; b < primes.length; b++) {
        for (let a = 0; a < primes.length; a++) {
            const primeA = primes[a];
            const primeB = primes[b];
            const primeC = primes[c];
            const ppt = primePowerTrip(primeA, primeB, primeC);
            if (ppt < maxN) {
                // console.log("PPT Time: ", primeA, primeB, primeC, ppt);

                primePowerTriples.push(ppt);
            } else {
                break;
            }
        }
    }
}

// console.log(primes);
console.log(_.uniq(primePowerTriples).length);
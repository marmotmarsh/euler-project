import _ from "lodash";
import { isPrime } from "../util.ts";

const maxN = 5000;
let n = 3;
let sumPrimesMap = new Map<number ,number[][]>;
sumPrimesMap.set(2, [[2]]);
sumPrimesMap.set(3, [[3]]);
let mostSumPrimes: number[][] = [[3]];
let primesList: number[] = [2, 3];

while (mostSumPrimes.length < maxN) {
    n++;
    let sumPrimesList: number[][] = [];
    if (isPrime(n)) {
        primesList.push(n);
        sumPrimesList.push([n]);
    }
    for (let p of primesList) {
        let tempSumPrimes = sumPrimesMap.get(n - p) || [];
        tempSumPrimes.forEach((s) => {
            sumPrimesList.push([...s, p].toSorted((a, b) => b - a));
        })
    }
    sumPrimesList = _.uniqBy(sumPrimesList, JSON.stringify);

    sumPrimesMap.set(n, sumPrimesList);
    if (sumPrimesList.length >= mostSumPrimes.length) {
        mostSumPrimes = sumPrimesList
    }
}

// console.log(mostSumPrimes);
console.log(n, "has length", mostSumPrimes.length);
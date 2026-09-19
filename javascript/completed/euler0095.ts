import _ from 'lodash';

import { getProperDivisors as getPropDivs } from "../util.ts";

const maxN = 1000000;
// let properDivisorsMap = new Map<number, number[]>;
let numToDivsSumMap = new Map<number, number>;
let chainMap = new Map<number, number[]>;
let longestChain: number[] = [];

for (let i = 2; i <= maxN; i++) {
    const divs = getPropDivs(i);
    const sum = _.sum(divs);
    numToDivsSumMap.set(i, sum);
}

// console.log(numToDivsSumMap);

function checkChainability(chain: number[], b: number): boolean {
    if (_.includes(chain.slice(0, -1), b)) {
        return false;
    }
    if (b == 1) {
        return false;
    }
    if (b > maxN) {
        return false;
    }
    return true;
}

for (let i = 2; i <= maxN; i++) {
    // console.log("Checking chain for:", i);

    let a = i;
    let b = numToDivsSumMap.get(i);
    if (b === undefined) {
        continue;
    }
    let chain = [a, b];
    
    while (checkChainability(chain, b)) {
        let tempB = b;
        b = numToDivsSumMap.get(b);
        a = tempB;
        if (b === undefined) {
            break;
        }
        chain.push(b);
    }

    chainMap.set(i, chain);
    if (i == _.last(chain)) {
        // console.log("Amicable chain", chain);
        if (chain.length >= longestChain.length) {
            longestChain = chain;
        }
    }
    // console.log("Chain for:", i, chain);
}

console.log(longestChain);
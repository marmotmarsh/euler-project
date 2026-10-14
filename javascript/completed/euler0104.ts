import _ from "lodash";
import BigNumber from "bignumber.js";

// const panDigits = ["1", "2"];
const panDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let k = 2;
let fibM1 = new BigNumber(1);
let fibM2 = new BigNumber(1);
let curFib = fibM2;

function checkFibSeq(f: BigNumber, k: number): boolean {
    const fString = f.toFixed();
    if (fString.length < 18) {
        return false
    }

    const firstDigs = _.without(fString.slice(0, panDigits.length).split(""), "0");
    // console.log(firstDigs);
    if (firstDigs.length < 9 || firstDigs.length !== new Set(firstDigs).size) {
        return false;
    }

    const lastDigs = _.without(fString.slice(-panDigits.length).split(""), "0");

    if (lastDigs.length < 9 || lastDigs.length !== new Set(lastDigs).size) {
        return false;
    }

    return true;
}

while (!checkFibSeq(curFib, k)) {
    k++;
    fibM1 = fibM2;
    fibM2 = curFib;
    curFib = fibM1.plus(fibM2);
}

// console.log(curFib.toFixed())
console.log(k);
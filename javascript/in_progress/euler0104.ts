import _ from "lodash";
import BigNumber from "bignumber.js";

// const panDigits = [1, 2];
const panDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 2;
let fibM1 = new BigNumber(1);
let fibM2 = new BigNumber(1);
let curFib = fibM2;

function checkFibSeq(f: BigNumber, k: number): boolean {
    // if (10**(panDigits.length - 1)) {
    //     return false;
    // }

    const fString = f.toFixed();
    const fArray = fString.split("");
    const firstDigs = fArray.slice(0, panDigits.length).map((v) => parseInt(v));

    if (!_.every(panDigits, (v) => _.includes(firstDigs, v))) {
        return false;
    }

    const lastDigs = fArray.slice(-panDigits.length).map((v) => parseInt(v));

    if (!_.every(panDigits, (v) => _.includes(lastDigs, v))) {
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

console.log(k);
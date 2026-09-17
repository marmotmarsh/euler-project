let bouncyNums: number = 0;
let allNums: number = 100;
const target: number = 0.99;

function isIncreasing(digits: number[]): boolean {
    if (digits.length <= 1) {
        return true;
    } else if (digits[0] > digits[1]) {
        return false;
    } else {
        return isIncreasing(digits.slice(1));
    }
}

function isDecreasing(digits: number[]): boolean {
    if (digits.length <= 1) {
        return true;
    } else if (digits[0] < digits[1]) {
        return false;
    } else {
        return isDecreasing(digits.slice(1));
    }
}

while (bouncyNums / allNums < target) {
    allNums++;
    const digits: number[] = allNums.toString().split('').map((v) => parseInt(v));
    if (!isIncreasing(digits) && !isDecreasing(digits)) {
        bouncyNums++;
    }
}

console.log("Answer: " + allNums);
console.log("Bouncy numbers: " + bouncyNums);
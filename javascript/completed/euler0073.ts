let theD = 1;
const maxD = 12000;
const minRange = 1 / 3;
const maxRange = 1 / 2;
let fracs: number[][] = [];

console.log(minRange, maxRange)

function hcf(n: number, d: number): number {
    for (let i = 2, maxI = n; i <= maxI; i++) {
        if ((d % i == 0) && (n % i == 0)) {
            return i
        }
    }
    return 1;
}

function inRange(n: number, d: number): boolean {
    const tot = n / d;
    // return (tot > minRange) && (tot < maxRange);
    return tot < maxRange;
}

for (let d = 4; d <= maxD; d++) {
    for (let n = Math.ceil(d / 3); n < d; n++) {
        // console.log("executing with: ", n, d);
        if (!inRange(n, d)) {
            // console.log("not in range:", n, d, n / d)
            break;
        }
        if (hcf(n, d) == 1) {
            fracs.push([n, d])
        }
    }
}

console.log(fracs.length);
import _ from "lodash";

let lMap = new Map<number, Array<Set<number>>>;

// a = m^2 - n^2
// b = 2mn
// c = m^2 + n^2
//
// l = 2m^2 + 2mn
// m^2 + m - l/2 = 0

function getMaxM(l: number): number {
    const top = -1 + Math.sqrt(1 + (2 * l));
    const bot = 2;
    const total = Math.ceil(top / bot);
    return total;
}

function addToMap(l: number, nums: Set<number>) {
    const vals = lMap.get(l) || [];
    if (_.some(vals, (s) => nums.isSubsetOf(s))) {
        return;
    }
    lMap.set(l, [...vals, nums]);
}

let maxL = 1500000;
// let maxL = 120;

for (let m = 2; m <= getMaxM(maxL); m++) {
    for (let n = 1; n < m; n++) {
        const a = (m * m) - (n * n);
        const b = 2 * m * n;
        const c = (m * m) + (n * n);
        let l = a + b + c;
        if (l > maxL) {
            break;
        }
        let aPlus = a;
        let bPlus = b;
        let cPlus = c;
        while (l <= maxL) {
            addToMap(l, new Set([aPlus, bPlus, cPlus]));
            aPlus += a;
            bPlus += b;
            cPlus += c;
            l = aPlus + bPlus + cPlus;
        }
        // console.log('Found pyth triple', l, "=>", a, b, c);
    }
}

let count = 0;

for (let vals of lMap.values()) {
    if (vals.length == 1) {
        count++;
    }
}

console.log(count);
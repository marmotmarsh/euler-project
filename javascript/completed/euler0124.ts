type Radical = {
    n: number;
    rad: number;
    // k: number; 
};

const maxN = 100000;
const k = 10000;
let unsorted: Radical[] = [{n: 1, rad: 1}];

for (let n = 2; n <= maxN; n++) {
    let factors: number[] = [1];
    let num = n;
    for (let div = 2; num > 1; div++) {
        while (num % div == 0) {
            num /= div;
            if (factors[0] !== div) {
                factors = [div, ...factors];
            }
        }
        if (num == 1) {
            break;
        }
    }
    const product = factors.reduce((p, c) => p * c);
    unsorted.push({ n, rad: product });
}

let sorted: Radical[] = unsorted.toSorted((a, b) => {
    if (a.rad == b.rad) {
        return a.n - b.n;
    }
    return a.rad - b.rad;
});

console.log(sorted[k - 1]);
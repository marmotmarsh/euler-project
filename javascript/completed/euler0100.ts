// bn+1 = 3 ⁢bn + 2 ⁢tn - 2 ⁢

// tn+1 = 4 ⁢bn + 3 ⁢tn - 3 ⁢

let b = 15;
let t = 21;
let minimumT = Math.pow(10, 12);

while (t < minimumT) {
    const nextB = (3 * b) + (2 * t) - 2;
    const nextT = (4 * b) + (3 * t) - 3;
    b = nextB;
    t = nextT;
}

console.log(t, b);

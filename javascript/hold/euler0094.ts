// const max = 20;
const max = 1000000000;

let count = 0;
let s1 = 5;

while (3 * s1 - 1 <= max) {
    let s2 = (s1 + 1) / 2;
    let h = Math.sqrt((s1 * s1) - (s2 * s2));
    let area = h * s2;
    if (area === Math.floor(area)) {
        count++;
    }
    if (3 * s1 + 1 <= max) {
        s2 = (s1 - 1) / 2;
        h = Math.sqrt((s1 * s1) - (s2 * s2));
        area = h * s2;
        if (area === Math.floor(area)) {
            count++;
        }
    }
    s1++;
}

console.log(count);
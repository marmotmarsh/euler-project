
let lMap = new Map<number, number[][]>;

let maxL = 1500000;
let x = 2;
let y = 2;
let z = 2;
let l = 6

do {
    do {
        y++;
        z = Math.sqrt((x * x) + (y * y));
        l = x + y + z;
        // console.log('Trying with:', x, y, z);
        if (z == Math.floor(z)) {
            lMap.set(l, [...(lMap.get(l) || []), [x, y, z]])
        }
    } while (l < maxL)
    x++;
    y = x;
    z = Math.sqrt((x * x) + (y * y));
    l = x + y + z;
} while (l < maxL);

// console.log(lMap);
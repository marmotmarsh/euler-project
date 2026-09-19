const targetCount = 2000000;
let closestCount = 0;
let closestArea = 0;

function findRects(a: number, b: number): number { 
    let count = 0;
    for (let x = 0; x < a; x++) {
        for (let y = 0; y < b; y++) {
            count += (a - x) * (b - y);
        }
    }
    return count;
}

function getClosest(a: number, b: number, comp: number): number { 
    if (Math.abs(a - comp) < Math.abs(b - comp)) {
        return a;
    }
    return b;
}


let aabbSquare = false;
let aaa = 1

while (!aabbSquare) {
    let bbb = 2;
    let prevCount = findRects(aaa, 1);
    let nextCount = findRects(aaa, 2);
    while (nextCount < targetCount) {
        bbb++;
        prevCount = nextCount;
        nextCount = findRects(aaa, bbb);
    }
    // console.log("Rects:", aaa, bbb, prevCount, nextCount);
    const bigger = getClosest(prevCount, nextCount, targetCount);
    closestCount = getClosest(closestCount, bigger, targetCount);
    if (closestCount == prevCount) {
        closestArea = aaa * (bbb - 1);
    } else if (closestCount == nextCount) {
        closestArea = aaa * bbb;
    }
    if (aaa >= bbb) {
        aabbSquare = true;
    }
    aaa++;
}

console.log("Area", closestArea, "Count", closestCount);


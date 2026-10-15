const maxSolutions = 1000000;
let solutionCount = 0;
let m = 0;

while (solutionCount <= maxSolutions) {
    m++;
    let l = m;
    for (let w = 1; w <= l; w++) {
        for (let h = 1; h <= w; h++) {
            const pathLength = Math.sqrt(Math.pow(h + w, 2) + Math.pow(l, 2));
            if (Math.floor(pathLength) == pathLength) {
                // console.log(l, w, h, pathLength);
                solutionCount++;
            }
        }
    }
}

console.log("Number of solutions", maxSolutions);
console.log("M", m);
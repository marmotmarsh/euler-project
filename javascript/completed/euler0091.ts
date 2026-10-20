const edge = 50;
let count = 0;

function isRightTriangle(x1: number, y1: number, x2: number, y2: number): boolean {
    const a = x1 * x1 + y1 * y1;
    const b = x2 * x2 + y2 * y2;
	const c = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
		return a + b == c
		    || b + c == a
		    || c + a == b;
}

// count all triangles withat least one vertex on the x or y axis

// count += (3 * (edge * edge));
// count += (edge / 2) * 2

// count the rest -- (x1, x2, y1, y2) >= 1
// starting a second count, because all triangles will be double counted, so divide by 2

let countRest = 0

for (let x1 = 0; x1 <= edge; x1++) {
    for (let y1 = 0; y1 <= edge; y1++) {
        for (let x2 = 0; x2 <= edge; x2++) {
            for (let y2 = 0; y2 <= edge; y2++) {
                if ((y2 * x1) < (y1 * x2) && isRightTriangle(x1, y1, x2, y2)) {
                    countRest++;
                }
            }
        }
    }
}

count += (countRest);

console.log(count);
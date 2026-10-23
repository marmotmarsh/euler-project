import _ from 'lodash';

type Cube = Set<number>;
type Square = Array<number>;

const squares1 = ['01', '04', '09', '16', '25', '36', '49', '64', '81'];
let squares: Array<Square> = squares1.map(v => {
    return v.split("").map((n) => parseInt(n));
});
let cubes: Array<Cube> = [];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function makeDice(cube: Cube, digs: number[]) {
    if (6 - cube.size > digs.length) {
        return;
    }
    if (cube.size === 6) {
        cubes.push(cube);
        return;
    }
    digs.forEach((v, i) => {
        const newCube = new Set([...cube, v]);
        const newDigs = digs.slice(i + 1);
        makeDice(newCube, newDigs);
    });
}

makeDice(new Set(), digits);

console.log(cubes.length);

function testSolution(cube1: Cube, cube2: Cube): boolean {
    // console.log("testing solution", cube1, cube2);
    return _.every(squares, (sqr) => {
        const v1 = sqr[0];
        const v2 = sqr[1];
        if (v1 === 6 || v1 === 9) {
            return ((cube1.has(6) || cube1.has(9)) && cube2.has(v2))
                || ((cube2.has(6) || cube2.has(9)) && cube1.has(v2));
        }
        if (v2 === 6 || v2 === 9) {
            return ((cube1.has(6) || cube1.has(9)) && cube2.has(v1))
                || ((cube2.has(6) || cube2.has(9)) && cube1.has(v1));
        }
        return (cube1.has(v1) && cube2.has(v2)) || (cube2.has(v1) && cube1.has(v2));
    })
}

let count = 0;

cubes.forEach((cube1, i) => {
    const restOfCubes = cubes.slice(i + 1);
    restOfCubes.forEach((cube2) => {
        if (testSolution(cube1, cube2)) {
            count++;
        }
    })
})

console.log("Total", count);
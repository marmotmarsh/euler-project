import _ from 'lodash';

import { readTxtAsLines } from '../util.ts';

function createSudokus(lines: string[]): number[][][] {
    let numberGrid: number[][] = [];
    let sudokus: number[][][] = [];
    for (let line of lines) {
        if (line.slice(0, 4) == "Grid") {
            if (numberGrid.length) {
                sudokus.push(numberGrid);
            }
            numberGrid = [];
        } else {
            const chars: string[] = line.split("");
            const nums: number[] = chars.map(v => parseInt(v));
            numberGrid.push(nums);
        }
    }

    sudokus.push(numberGrid);
    return sudokus;
}

function isLegalMove(sudoku: number[][], x: number, y: number, v: number): boolean {
    // Check row
    const rowVals = _.without([...sudoku[x], v], 0);
    if (rowVals.length !== new Set(rowVals).size) {
        return false
    }

    // Check column
    const colVals = _.without([...sudoku.map(r => r[y]), v], 0);
    if (colVals.length !== new Set(colVals).size) {
        return false
    }

    // Check square
    let sqrVals: number[] = [v];
    const xStart = Math.floor(x / 3) * 3;
    const yStart = Math.floor(y / 3) * 3;
    for (let i = xStart; i < xStart + 3; i++) {
        for (let j = yStart; j < yStart + 3; j++) {
            const val = sudoku[i][j];
            if (val !== 0) {
                sqrVals.push(val);
            }
        }
    }
    if (sqrVals.length !== new Set(sqrVals).size) {
        return false
    }

    return true;
}

function findNextEmpty(sudoku: number[][]): number[] | null {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (sudoku[x][y] == 0) {
                return [x, y];
            }
        }
    }
    return null;
}

function solveSudoku(sudoku: number[][]): boolean {
    // Check if solved
    const nextEmpty = findNextEmpty(sudoku);
    if (!nextEmpty) {
        return true;
    }

    const [x, y] = nextEmpty;
    for (let v = 1; v <= 9; v++) {
        if (isLegalMove(sudoku, x, y, v)) {
            sudoku[x][y] = v;
            if (solveSudoku(sudoku)) {
                return true;
            }

            // Backtrack
            sudoku[x][y] = 0;
        }
    }

    return false;
}

function solveAll() {
    const lines = readTxtAsLines('../../data/x0096.txt');
    let sudokus = createSudokus(lines);
    let sum = 0;
    for (let s of sudokus) {
        solveSudoku(s);
        const nums = s[0].slice(0, 3);
        sum += (nums[0] * 100) + (nums[1] * 10) + nums[2];
    }
    return sum;
}

console.log(solveAll());

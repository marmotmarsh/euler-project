import { readTxtAsLines } from '../util.ts'

const lines = readTxtAsLines('../../data/x0089.txt');

console.log(lines.length);

let charsSaved = 0;

for (let line of lines) {
    if (line.match(/DCCCC/)) {
        charsSaved += 3;
    } else if (line.match(/CCCC/)) {
        charsSaved += 2;
    }

    if (line.match(/LXXXX/)) {
        charsSaved += 3;
    } else if (line.match(/XXXX/)) {
        charsSaved += 2;
    }

    if (line.match(/VIIII/)) {
        charsSaved += 3;
    } else if (line.match(/IIII/)) {
        charsSaved += 2;
    }
}

console.log(charsSaved)
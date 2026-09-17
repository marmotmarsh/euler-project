import * as fs from 'fs';

function readCsvAsArray(filename: string): number[][] {
	return fs
		.readFileSync(filename, 'utf-8')
		.trim()
		.split(/\r?\n/)
		.filter((line: string) => line.length > 0)
		.map((line: string) => line.split(',').map(Number));
}

let numsArray: number[][] = readCsvAsArray("../../data/x0099.txt");
let logs = [];

for (let i = 0; i < numsArray.length; i++) {
	logs.push(Math.log(numsArray[i][0]) * numsArray[i][1]);
}

let maxIndex = logs.indexOf(Math.max(...logs));
console.log(maxIndex + 1);


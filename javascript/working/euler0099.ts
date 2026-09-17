import * as fs from 'fs';

function readCsvAsArray(filename: string): number[][] {
	return fs
		.readFileSync(filename, 'utf-8')
		.trim()
		.split(/\r?\n/)
		.filter((line: string) => line.length > 0)
		.map((line: string) => line.split(',').map(Number));
}

let numsArray = readCsvAsArray("../../data/x0099.txt");

console.log(numsArray[0])
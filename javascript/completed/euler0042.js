import fs from 'fs';

function findWordScore(word, letterVals) {
  let score = 0;
  for (let char of word) {
    if (!letterVals[char]) {
      letterVals[char] = char.charCodeAt(0) - 64;
    }
    score += letterVals[char];
  }
  return score;
}

function isTriangle(num, triangleMap) {
  if (triangleMap[num] === undefined) {
    triangleMap[num] = Number.isInteger((Math.sqrt(8 * num + 1) - 1) / 2);
  }
  return triangleMap[num];
}

export function solve42() {
  const file = fs.readFileSync('./data/x0042.txt', {
    encoding: 'utf-8',
  });
  const words = file.replace(/["]+/g, '').split(',');

  let letterVals = {};
  let triangleMap = {};
  let triangleWords = {};
  let count = 0;

  for (let word of words) {
    const score = findWordScore(word, letterVals);
    if (isTriangle(score, triangleMap)) {
      triangleWords[word] = score;
      count++;
    }
  }

  return count;
}

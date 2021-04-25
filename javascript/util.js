import fs from 'fs';

export function parseFileAsString(filename) {
  const file = fs.readFileSync(filename, {
    encoding: 'utf-8',
  });
  const fileStr = file
    .split('\n')
    .map((s) => s.trim())
    .join('');
  return fileStr;
}

export function parseFileAsMatrix(filename) {
  const file = fs.readFileSync(filename, {
    encoding: 'utf-8',
  });
  const fileArr = file.split('\n').map((l) => l.split(' '));
  return fileArr;
}

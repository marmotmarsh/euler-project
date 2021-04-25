import fs from 'fs';

export function parseFileToString(filename) {
  const file = fs.readFileSync(filename, {
    encoding: 'utf-8',
  });
  const fileStr = file
    .split('\n')
    .map((s) => s.trim())
    .join('');
  return fileStr;
}

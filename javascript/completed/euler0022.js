import fs from 'fs';

export async function solve22() {
  var file = fs.readFileSync('./data/x0022.txt', {
    encoding: 'utf-8',
  });
  var names = file.replace(/["]+/g, '').split(',');
  var sortedNames = names.sort();
  var scores = sortedNames.reduce(
    (accum, name, i) => ({
      ...accum,
      [name]:
        name.split('').reduce((sum, c) => sum + c.charCodeAt(0) - 64, 0) *
        (i + 1),
    }),
    {}
  );
  return Object.values(scores).reduce((sum, v) => sum + v, 0);
}

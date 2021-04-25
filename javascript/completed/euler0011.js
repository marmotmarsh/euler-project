import { parseFileAsMatrix } from '../util.js';

export async function solve11() {
  var grid = parseFileAsMatrix('./data/x0011.txt');
  var l = 4;
  var n = 20;
  var max = 0;

  // rows
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - l + 1; j++) {
      var nums = grid[i].slice(j, j + l);
      var prod = nums.reduce((total, x) => total * x, 1);
      max = prod > max ? prod : max;
    }
  }

  // columns
  for (var i = 0; i < n - l + 1; i++) {
    for (var j = 0; j < n; j++) {
      var nums = grid.slice(i, i + l).map((row) => row[j]);
      var prod = nums.reduce((total, x) => total * x, 1);
      max = prod > max ? prod : max;
    }
  }

  // diagonals down
  for (var i = 0; i < n - l + 1; i++) {
    for (var j = 0; j < n - l + 1; j++) {
      var nums = grid.slice(i, i + l).map((row, x) => row[j + x]);
      var prod = nums.reduce((total, x) => total * x, 1);
      max = prod > max ? prod : max;
    }
  }

  // diagonals up
  for (var i = l - 1; i < n; i++) {
    for (var j = 0; j < n - l + 1; j++) {
      var nums = grid
        .slice(i - l + 1, i + 1)
        .map((row, x) => row[j + (l - x - 1)]);
      var prod = nums.reduce((total, x) => total * x, 1);
      max = prod > max ? prod : max;
    }
  }

  return max;
}

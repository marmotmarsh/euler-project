export async function solve6() {
  var n = 100;
  var nArr = new Array(n).fill(0).map((_v, i) => i + 1);
  var squareFirst = nArr.reduce((sum, v) => v * v + sum, 0);
  var sumFirst = Math.pow((n * (n + 1)) / 2, 2);
  return sumFirst - squareFirst;
}

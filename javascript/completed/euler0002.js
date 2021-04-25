import BigNumber from "bignumber.js";

export async function solve2() {
  var n = 4000000;
  var sum = new BigNumber(0);
  var f1 = new BigNumber(1);
  var f2 = new BigNumber(2);
  var temp;
  while (f2.isLessThan(n)) {
    sum = sum.plus(f2);
    for (var i = 0; i < 3; i++) {
      temp = f2;
      f2 = f2.plus(f1);
      f1 = temp;
    }
  }
  return sum.toString();
}

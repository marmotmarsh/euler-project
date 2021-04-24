import BigNumber from "bignumber.js";

function findMultSum(div, n) {
  var maxMult = new BigNumber(n).minus(n % div);
  var trueMaxUlt = maxMult.isEqualTo(n)
    ? new BigNumber(n).minus(div)
    : new BigNumber(maxMult);
  var maxMultDived = trueMaxUlt.dividedToIntegerBy(div);
  return maxMultDived
    .plus(1)
    .multipliedBy(maxMultDived)
    .dividedToIntegerBy(2)
    .multipliedBy(div);
}

export async function solve() {
  var n = 1000;
  if (n > 0 && n <= 1000000000) {
    var total = new BigNumber(findMultSum(3, n))
      .plus(findMultSum(5, n))
      .minus(findMultSum(15, n));
    return total.toString();
  } else {
    return 0;
  }
}

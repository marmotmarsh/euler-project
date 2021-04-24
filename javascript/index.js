import { solve } from "./euler0001.js";
import ptimeout from "promise.timeout";

async function main() {
  var result = await solve();
  console.log(result);
  return;
}

var solution = ptimeout(main, 60000);
solution();

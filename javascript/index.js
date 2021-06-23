import { solve } from './solve.js';

async function main() {
  const n = process.argv[2];
  const timerString = `Solving problem ${n}`;

  console.time(timerString);

  await solve(n);

  console.timeEnd(timerString);
}

main();

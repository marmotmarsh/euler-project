import { solve } from './solve.js';

export function main() {
  const n = process.argv[2];
  const timerString = `Solving problem ${n}`;

  console.time(timerString);

  solve(n);

  console.timeEnd(timerString);
}

main();

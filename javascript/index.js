import ptimeout from 'promise.timeout';

import { solve } from './solve.js';

async function main() {
  const n = process.argv[2];
  solve(n);
}

const solution = ptimeout(main, 60000);
solution();

import _ from 'lodash';
import { permutations } from '../util.js';

function checkForPans(num, base, i = 1) {
  if (base === '1') {
    return false;
  }
  if (num === '') {
    return true;
  }
  const start = (parseInt(base, 10) * i).toString();
  if (num.match(new RegExp(`^${start}`))) {
    return checkForPans(num.slice(start.length), base, ++i);
  }
  return false;
}

export async function solve38() {
  let perms = permutations('987654321');
  perms.sort((a, b) => b - a);

  for (let perm of perms) {
    for (let i = 1; i < 5; i++) {
      if (checkForPans(perm, perm.slice(0, i))) {
        return perm;
      }
    }
  }
}

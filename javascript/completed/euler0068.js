import _ from 'lodash';

function addVertex(magicRing, solutions, nums, group = 0, step = 1) {
  for (let num of nums) {
    let newRing = _.cloneDeep(magicRing);
    if (nums.length === 1 && num > magicRing[0][0]) {
      newRing[group][step] = num;
      if (_.sum(newRing[group]) === _.sum(newRing[0])) {
        const strung = newRing.reduce((str, gr) => str + gr.reduce((sub, n) => sub + n.toString(), ''), '');
        solutions.push(strung);
      }
      return;
    }

    let newNums = _.without(nums, num);
    let newGroup = group;
    let newStep = step;

    if (step === 0 && num < newRing[0][0]) {
      continue;
    } else {
      newRing[group][step] = num;
      newStep = group === 0 ? 1 : 2;
    }

    if (step === 1 && group === 0) {
      newRing[group][step] = num;
      newRing[newRing.length - 1][2] = num;
      newStep = 2;
    }

    if (step === 1 && group > 0) {
      newNums = nums;
      newStep = 2;
    }

    if (step === 2) {
      newRing[group][step] = num;
      newRing[group + 1][1] = num;
      newGroup = group + 1;
      newStep = 0;
      if (group > 0 && _.sum(newRing[group]) !== _.sum(newRing[0])) {
        continue;
      }
    }

    addVertex(newRing, solutions, newNums, newGroup, newStep);
  }
}

export function solve68() {
  const n = 5;
  let nums = [];

  for (let i = 1; i <= n * 2; i++) {
    nums.push(i);
  }

  let solutions = [];

  for (let x = 1; x <= n + 1; x++) {
    let magicRing = new Array(n).fill([]).map((_v) => new Array(3));
    magicRing[0][0] = x;
    addVertex(magicRing, solutions, _.without(nums, x));
  }

  return Math.max(...solutions.filter((n) => n.length === 16).map((n) => parseInt(n, 10)));
}

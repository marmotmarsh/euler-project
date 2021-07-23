import fs from 'fs';
import _ from 'lodash';

//         65 ==> 1000001
//         42 ==> 0101010
//  65 XOR 42 ==> 1101011

//        107 ==> 1101011
// 107 XOR 42 ==> 1000001

function getNextKey(key) {
  const startKeyCode = 'a'.charCodeAt(0);
  const endKeyCode = 'z'.charCodeAt(0);
  let newKey = [];
  let bumpedOne = false;

  if (key.every((charCode) => charCode === endKeyCode)) {
    return undefined;
  }

  for (let charCode of key) {
    if (!bumpedOne) {
      if (charCode < endKeyCode) {
        newKey.push(charCode + 1);
        bumpedOne = true;
      } else {
        newKey.push(startKeyCode);
      }
    } else {
      newKey.push(charCode);
    }
  }

  return newKey;
}

export function solve59() {
  const n = 3;

  const file = fs.readFileSync('./data/x0059.txt', {
    encoding: 'utf-8',
  });
  const encrypted = file
    .trim()
    .split(',')
    .map((c) => parseInt(c, 10));
  const key = ''.padStart(n, 'a');
  const keyCharCodes = key.split('').map((c) => c.charCodeAt(0));
  let nextKeyCodes = _.cloneDeep(keyCharCodes);
  let codeSum;
  let foundOne = false;

  do {
    const decryptedCharCodes = encrypted.map((char, i) => char ^ nextKeyCodes[i % n]);
    const decrypted = String.fromCharCode(...decryptedCharCodes);
    if (decrypted.search(' the ') !== -1) {
      codeSum = _.sum(decryptedCharCodes);
      foundOne = true;
      // console.log(nextKeyCodes);
      console.log(decrypted);
    }
    nextKeyCodes = getNextKey(nextKeyCodes);
  } while (!foundOne || !!nextKeyCodes);

  return codeSum;
}

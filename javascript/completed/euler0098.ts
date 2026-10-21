import _ from 'lodash';

import { isNumber, readTxtAsLines } from "../util.ts";

let wordMap = new Map<string, string[]>;

function updateWordMap(word: string) {
    const alphaChars = word.split("").toSorted().join("");
    const curr = wordMap.get(alphaChars) || [];
    wordMap.set(alphaChars, [...curr, word]);
}


const txt = readTxtAsLines("../../data/x0098.txt")[0];
const words = txt.split(",").map((w) => w.replaceAll('"', ""));
// const words = ['CARE', 'RACE', 'ACT', 'CAT'];

for (let word of words) {
    updateWordMap(word);
}

let newWordMap = new Map<string, string[]>;

for (let key of wordMap.keys()) {
    const value = wordMap.get(key);
    if (!!value && value.length > 1) {
        newWordMap.set(key, value);
    }
}

const keysByLength = newWordMap.keys().toArray().toSorted((a, b) => b.length - a.length)
const digits = [...Array(10)].map((v, i) => i.toString()).reverse();

function findSquareNumbers(str: string, digs: string[]): number[] {
    if (str[0] == '0') {
        return [];
    }
    if (isNumber(str)) {
        const sqrt = Math.sqrt(parseInt(str));
        if (Math.floor(sqrt) == sqrt) {
            return [parseInt(str)];
        }
        return [];
    }
    if (digs.length < 1) {
        return [];
    }
    
    // console.log(str, digs);
    const newDigs = _.flatten(_.map(digs, (dig, i) => {
        const c = (str.match(/[a-zA-Z]/) || []).pop();
        if (c == undefined) {
            return [];
        }
        return findSquareNumbers( str.replaceAll(c, dig), digs.toSpliced(i, 1));
    }))

    return newDigs.filter((v) => v > 0);
}

let found = false;

for (let key of keysByLength) {
    console.log("trying with key:", key);
    const words = newWordMap.get(key)!;
    for (let word of words) {
        // console.log('trying with word:', word );
        const digs = findSquareNumbers(word, digits);
        for (let dig of digs) {
            const digStr = dig.toString();
            for (let word2 of words) {
                if (word2 == word) {
                    continue;
                }
                let word22 = word2;
                word.split('').forEach((c, i) => {
                    word22 = word22.replaceAll(c, digStr.charAt(i));
                })
                // console.log(word22);
                const dig2 = findSquareNumbers(word22, [])[0];
                if (!!dig2  && dig2 > 0) {
                    console.log('Found one square:', word, digStr);
                    console.log('Found a second one:', word2, dig2.toString());
                    found = true;
                }
            }
            // console.log(dig);
        }
    }
    if (found) {
        break;
    }
}

// console.log(isNumber("987654321"));
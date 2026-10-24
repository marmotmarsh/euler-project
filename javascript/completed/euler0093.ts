
const maxDigit = 9;

function findSolutions(exp: number[], solutions: Set<number>) {
    if (exp.length === 1) { 
        const sol = exp[0];
        if (Math.floor(sol) === sol && sol > 0 && sol !== Infinity) {
            solutions.add(sol);
        }
        return;
    } else {
        for (let i = 0; i < exp.length - 1; i++) {
            const start = exp.slice(0, i);
            const end = exp.slice(i + 2);
            findSolutions([...start, exp[i] + exp[i+1], ...end], solutions);
            findSolutions([...start, exp[i] - exp[i+1], ...end], solutions);
            findSolutions([...start, exp[i] * exp[i+1], ...end], solutions);
            findSolutions([...start, exp[i] / exp[i+1], ...end], solutions);
        }
    }
}


function buildExpression(digits: Set<number>, exp: number[], solutions: Set<number>) {
    if (digits.size === 0) {
        findSolutions(exp, solutions);
    }   
    for (let x of digits) {
        let newExp = [...exp, x];
        let newDigs = digits.difference(new Set(newExp));
        buildExpression(newDigs, newExp, solutions);
    }
}

function findLongestStreak(solutions: Set<number>): number[] {
    const sortedSols = solutions.values().toArray().toSorted((a, b) => a - b);
    let maxStreak: number[] = [];
    let currentStreak: number[] = [];
    for (let i = 0; i < sortedSols.length; i++) {
        const v = sortedSols[i];
        if (currentStreak.length === 0) {
            currentStreak = [v];
        } else if (currentStreak.at(-1)! + 1 === v) {
            currentStreak.push(v);
        } else {
            if (currentStreak.length > maxStreak.length) {
                maxStreak = currentStreak;
            }
            currentStreak = [];
        }
    }

    return maxStreak;
}

let maxStreak: number[] = [];
let maxDigits: Set<number> = new Set();

for (let a = 1; a <= maxDigit - 3; a++) {
    for (let b = a + 1; b <= maxDigit - 2; b++) {
        for (let c = b + 1; c <= maxDigit - 1; c++) {
            for (let d = c + 1; d <= maxDigit; d++) {
                const digits = new Set([a, b, c, d]);
                if (digits.size === 4) {
                    let solutions: Set<number> = new Set();
                    buildExpression(digits, [], solutions);
                    const streak = findLongestStreak(solutions);
                    if (streak.length > maxStreak.length) {
                        maxStreak = streak;
                        maxDigits = digits;
                    }
                    // console.log(streak);
                }
            }
        }
    }
}

console.log('Streak', maxStreak);
console.log('Digits', maxDigits);
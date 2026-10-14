import _ from "lodash";
import { isPrime, getPrimeDivisors } from "../util.ts";

function bagOfMarles(n: number) {
    const primeDivs = getPrimeDivisors(n);
    const uniquePrimeDivs = new Set(primeDivs);
    const primeDivsCount = _.values(_.countBy(uniquePrimeDivs.values()));
}

// const max = 100000;
const max = 8;
let count = 0;

for (let i = 2; i <= max; i++) {
    if (isPrime(i)) {
        count += i - 1
    } else {
        const divs = new Set (getPrimeDivisors(i));
        let numerators: Set<number> = new Set();
        for (let div of divs) {
            let divving = div;
            while (divving < i) {
                numerators.add(divving);
                divving += div;
            }
        }
        count += (i - numerators.size - 1);
        console.log(i, numerators);
    }
}

console.log(count);
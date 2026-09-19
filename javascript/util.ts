import _ from 'lodash';

export function isPrime(num: number): boolean {
    // Numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    
    // 2 is the only even prime number
    if (num === 2) return true;
    
    // Exclude all other even numbers
    if (num % 2 === 0) return false;

    // Check odd factors up to the square root of the number
    const boundary = Math.sqrt(num);
    for (let i = 3; i <= boundary; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

export function getProperDivisors(n: number): number[] {
    if (n <= 1) {
        return [];
    }
    if (isPrime(n)) {
        return [1];
    }

    let nums: number[] = [1];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            nums.push(...(i == n/i ? [i] : [i, n/i]));
        }
    }

    return nums.toSorted();
}
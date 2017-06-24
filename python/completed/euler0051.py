###
#
# Created by Holden on 7/8/2016
#
# COMPLETED on 6/24/2017
#
# Problem 53 - Prime Digit Replacements
#
###

import math


def prime_digit_replacements(n):
    start = 3

    while True:
        if str(start)[-1] == "5":
            start += 2
            continue
        if "1" in str(start)[:-1]:
            string = str(start)[:-1].replace('1', '*') + str(start)[-1]
            if count_primes(string) == n:
                if string[0] == "*":
                    return string.replace('*', '1')
                return string.replace('*', '0')


        start += 2


# http://stackoverflow.com/questions/18833759/python-prime-number-checker
def is_prime(n):
    if n % 2 == 0 and n > 2: 
        return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True


def count_primes(s):
    count = 0

    for i in range(10):
        if i == 0 and s[0] == '*':
            continue
        n = int(s.replace('*', str(i)))
        if is_prime(n):
            count += 1

    return count


print(prime_digit_replacements(8))

###
#
# Created by Holden on 7/1/2017
#
# COMPLETED on 7/3/2017
#
# Problem 58 - Spiral Primes
#
###

import math


def spiral_primes(bound):
    side = 2
    cur = 9
    diag_primes = 3
    diag_total = 5

    while (diag_primes / diag_total) > bound:
        side += 2

        for i in range(4):
            cur += side

            if is_prime(cur):
                diag_primes += 1

            diag_total += 1

    return side + 1


# https://stackoverflow.com/questions/18833759/python-prime-number-checker
def is_prime(n):
    if n % 2 == 0 and n > 2:
        return False
    return all(n % i for i in range(3, int(math.sqrt(n)) + 1, 2))


print(spiral_primes(.1))

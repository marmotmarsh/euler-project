###
#
# Created by Holden on 3/19/2017
#
# COMPLETED on 3/20/2017
#
# Problem 37 - Truncatable Primes
#
###

import math
import itertools

PATTERNS = ["2"]
PRIMES = []


def truncatable_primes():
    global PATTERNS, PRIMES
    for i in range(1, 7):
        temp = list(itertools.product('13579', repeat=i))
        temp = list(map("".join, temp))
        temp2 = ["2" + x for x in temp]
        temp.extend(temp2)
        PATTERNS.extend(temp)

    PATTERNS = list(map(int, PATTERNS))
    PATTERNS.remove(1)

    trunc_primes = []
    for prime in PATTERNS:
        if not is_prime(prime):
            continue

        PRIMES.append(prime)

        if prime < 10:
            continue

        if is_truncatable(prime, "left-to-right") and is_truncatable(prime, "right-to-left"):
            trunc_primes.append(prime)
            if len(trunc_primes) == 11:
                break

    return sum(trunc_primes)


def is_truncatable(x, direction):
    if x < 10:
        if x == 1:
            return False
        return True

    if direction == "left-to-right":
        trunc = x % (10 ** math.floor(math.log10(x)))
        if trunc in PRIMES:
            return is_truncatable(trunc, direction)
        return False

    trunc = x // 10
    if trunc in PRIMES:
        return is_truncatable(trunc, direction)
    else:
        return False


# http://stackoverflow.com/questions/18833759/python-prime-number-checker
def is_prime(n):
    if n % 2 == 0 and n > 2:
        return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True


print(truncatable_primes())

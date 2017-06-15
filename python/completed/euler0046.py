###
#
# Created by Holden on 6/7/2017
#
# COMPLETED on 6/15/2017
#
# Problem 46 - Goldbach's other Conjecture
#
###

import math

primes100000 = open("../data/primes10000.txt", "r")
primes = []
for line in primes100000:
    primes.extend(map(int, line.strip().split()))

def goldbach():
    g = 3
    isG = False

    while not isG:
        g += 2
        isG = True

        if g in primes:
            isG = False
            continue
        i = 1

        while primes[i] < g:
            if is_perfect_square((g-primes[i])//2):
                isG = False

            i += 1

    return g

def is_perfect_square(n):
    return math.sqrt(n).is_integer()

print(goldbach())

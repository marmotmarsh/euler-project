###
#
# Created by Holden on 7/16/2016
#
# COMPLETED on 6/24/2017
#
# Problem 53 - Combinatoric Selections
#
###

from math import factorial


def choose(n, r):
    return factorial(n) // (factorial(r) * factorial(n - r))


def combinatorial_selections():
    total = 0
    
    for n in range(23, 101):
        for r in range(1, n+1):
            if choose(n, r) > 1000000:
                total += 1
    
    return total

print(combinatorial_selections())

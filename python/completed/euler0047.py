###
#
# Created by Holden on 6/15/2017
#
# COMPLETED on 6/16/2017
#
# Problem 47 - Distinct Prime Factors
#
###

from sympy.ntheory import factorint

def distinct_prime_factors(n):
    consec = False
    i = 1

    while not consec:
        consec = True
        i += 1
        primes = factorint(i)
        if len(primes) != n:
            consec = False
            continue
        for j in range(1, n):
            more_primes = factorint(i+j)
            if len(more_primes) != n:
                consec = False
                break
            if len(frozenset(primes.items()).intersection(more_primes.items())) == 0:
                primes.update(more_primes)
            else:
                consec = False
                break

    return i

print(distinct_prime_factors(4))

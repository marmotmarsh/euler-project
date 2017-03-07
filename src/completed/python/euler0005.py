###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 5 - Smallest Multiple
#
###

def smallest_multiple(products):
    n = 1
    primes = []
    
    for i in range(2, products + 1):
        for prime in primes:
            if i % prime == 0:
                i = int(i / prime)
            else:
                pass
        primes.append(i)
        n *= i
        
    return n
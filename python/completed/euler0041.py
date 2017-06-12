###
#
# Created by Holden on 5/25/2017
#
# COMPLETED on 5/25/2017
#
# Problem 41 - Pandigital prime
#
###

import itertools

def pandigital_primes(n):
    perms = list(map("".join, itertools.permutations([str(i) for i in range(1, n+1)], n)))[::-1]

    print(perms)

    for perm in perms:
        if isprime(int(perm)):
            return perm

    return -1

# https://www.daniweb.com/programming/software-development/code/216880/check-if-a-number-is-a-prime-number-python
def isprime(n):
    '''check if integer n is a prime'''
    # make sure n is a positive integer
    n = abs(int(n))
    # 0 and 1 are not primes
    if n < 2:
        return False
    # 2 is the only even prime number
    if n == 2:
        return True
    # all other even numbers are not primes
    if not n & 1:
        return False
    # range starts with 3 and only needs to go up the squareroot of n
    # for all odd numbers
    for x in range(3, int(n**0.5)+1, 2):
        if n % x == 0:
            return False
    return True

print(pandigital_primes(7))

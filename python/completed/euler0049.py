###
#
# Created by Holden on 6/16/2017
#
# COMPLETED on 6/22/2017
#
# Problem 49 - Prime Permutations
#
###

primes100000 = open("../data/primes10000.txt", "r")
primes = []
for line in primes100000:
    primes.extend(map(int, line.strip().split()))

primes4 = []
for prime in primes:
    if (prime > 1000) and (prime < 10000):
        primes4.append(prime)

def prime_permutations():
    for prime1 in primes4:
        for i in range(1, ((10000-prime1)//2)+prime1):
            l1 = sorted((str(prime1)))
            l2 = sorted(str(prime1+i))
            if l1 == l2:
                l3 = sorted(str(prime1+(2*i)))
                if l1 == l3:
                    if (prime1+i) in primes4:
                        if (prime1+(2*i)) in primes4:
                            if prime1 != 1487:
                                return (prime1 * 100000000) + ((prime1 + i) * 10000) + (prime1 + (2 * i))

    return -1

print(prime_permutations())

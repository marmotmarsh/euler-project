###
#
# Created by Holden on 12/27/2017
#
#
#
# Problem 60 - Prime Pair Sets
#
###

import math

PRIME_FILE = open("../data/primes10000.txt", "r")
PRIMES = []
for line in PRIME_FILE:
    PRIMES.extend(map(int, line.strip().split()))


def prime_pair_sets(n):
    pairs = {
        3: [],
    }
    primes_index = 3
    primes_max = len(PRIMES)

    while primes_index <= primes_max:
        cur_prime = PRIMES[primes_index]
        pairs[cur_prime] = []
        for key_prime in pairs:
            if is_prime(concat(cur_prime, key_prime)):
                pairs[cur_prime].append(key_prime)
            if is_prime(concat(key_prime, cur_prime)):
                pairs[key_prime].append(cur_prime)

        keys_set1 = pairs[cur_prime]
        if len(keys_set1) >= n - 1:
            prime_set = [cur_prime]
            for key_prime1 in keys_set1:
                if cur_prime in pairs[key_prime1]:
                    prime_set.append(key_prime1)
                    keys_set2 = set(keys_set1).intersection(pairs[key_prime1])
                    for key_prime2 in keys_set2:
                        if set(prime_set).issubset(set(pairs[key_prime2])):
                            prime_set.append(key_prime2)
                            keys_set3 = set(keys_set2).intersection(
                                pairs[key_prime2])
                            for key_prime3 in keys_set3:
                                if set(prime_set).issubset(set(pairs[key_prime3])):
                                    prime_set.append(key_prime3)
                                    keys_set4 = set(keys_set3).intersection(
                                        pairs[key_prime3])
                                    for key_prime4 in keys_set4:
                                        if set(prime_set).issubset(set(pairs[key_prime4])):
                                            prime_set.append(key_prime4)
                                            return sum(prime_set)
                                    prime_set = prime_set[:-1]
                            prime_set = prime_set[:-1]
                    prime_set = prime_set[:-1]

        primes_index += 1

    return 0


def concat(m, n):
    return (m * (10 ** (1 + math.floor(math.log10(n))))) + n


# http://stackoverflow.com/questions/18833759/python-prime-number-checker
def is_prime(n):
    if n % 2 == 0 and n > 2:
        return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True


print(prime_pair_sets(4))

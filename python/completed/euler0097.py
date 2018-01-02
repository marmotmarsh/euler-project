###
#
# Created by Holden on 1/1/2018
#
# SOLVED on 1/1/2018
#
# Problem 97 - Large Non-Mersenne Prime
#
###

import math


def eval_base2(exp):
    interval_base = int(math.log2(10**10)) + 1
    interval_mult = 2 ** interval_base
    final = 1

    print (interval_base, interval_mult)

    while exp > interval_base:
        final *= interval_mult
        final %= 10 ** 10
        exp -= interval_base

    return final * (2 ** exp)


def large_nonmersenne_prime(exp):

    return (28433 * eval_base2(exp) + 1) % (10 ** 10)


print(large_nonmersenne_prime(7830457))

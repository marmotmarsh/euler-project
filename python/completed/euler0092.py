###
#
# Created by Holden on 6/24/2016
#
# COMPLETED on 6/24/2017
#
# Problem 92 - Square Digit Chains
#
###

import math

terminals = {}


def square_digit_chains(bound):
    t89 = 0

    for i in range(1, bound+1):
        t = find_terminal(i, i)
        if t == 89:
            t89 += 1
        terminals[i] = t

    return t89


def find_terminal(n, maxn):
    power = sum([x*x for x in list(map(int, list(str(n))))])

    if power == 1 or power == 89:
        return power

    if power < maxn:
        return terminals[power]

    return find_terminal(power, maxn)


print(square_digit_chains(10000000))

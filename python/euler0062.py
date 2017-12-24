###
#
# Created by Holden on 12/19/2017
#
#
#
# Problem 62 - Cubic Permutations
#
###

import itertools
import math


def cubic_permutations(n):
    cubes = {"1": 1}
    powers = {"1"}
    base = 2
    power_len = 1

    while base < 5000:
        power = str(base * base * base)
        if int(math.log10(int(power))) + 1 > power_len:
            cubes = dict()
            powers = {power}
            power_len += 1
            print(power_len)

        cubes[power] = base
        powers.add(power)
        perms = set(map("".join, itertools.permutations(power)))

        similar = powers.intersection(perms)

        if len(similar) == n:
            return [cubes[x] for x in similar]

        base += 1

    return


print(cubic_permutations(4))

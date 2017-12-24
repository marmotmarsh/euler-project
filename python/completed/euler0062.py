###
#
# Created by Holden on 12/19/2017
#
# SOLVED on 12/23/2017
#
# Problem 62 - Cubic Permutations
#
###

import itertools
import math


def cubic_permutations(n):
    cubes = {"1": 1}
    base = 2
    power_len = 1

    while base < 50000:
        power = str(base * base * base)
        if int(math.log10(int(power))) + 1 > power_len:
            cubes = {}
            power_len += 1

        perm = "".join(sorted(power))

        if perm not in cubes:
            cubes[perm] = [power]
        else:
            cubes[perm].append(power)
            if len(cubes[perm]) >= n:
                return cubes[perm][0]

        base += 1

    return


print(cubic_permutations(5))

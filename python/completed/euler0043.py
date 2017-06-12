###
#
# Created by Holden on 5/25/2017
#
# COMPLETED on 5/25/2017
#
# Problem 43 - Sub-String Divisibility
#
###

import itertools


def coded_triangle_numbers(n):
    perms = list(map(int, map("".join, itertools.permutations([str(i) for i in range(0, n)], n))))
    num_sum = 0

    for perm in perms:
        if sub_string_divide(perm):
            print(perm)
            num_sum += perm

    return num_sum


def sub_string_divide(n):
    if n < 1000000000:
        return False

    if (n % 1000) % 17 != 0:
        return False

    if ((n % 10000) // 10) % 13 != 0:
        return False

    if ((n % 100000) // 100) % 11 != 0:
        return False

    if ((n % 1000000) // 1000) % 7 != 0:
        return False

    if ((n % 10000000) // 10000) % 5 != 0:
        return False

    if ((n % 100000000) // 100000) % 3 != 0:
        return False

    if ((n % 1000000000) // 1000000) % 2 != 0:
        return False

    return True


print(coded_triangle_numbers(10))

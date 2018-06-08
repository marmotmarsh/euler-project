###
#
# Created by Holden on 6/24/2016
#
# SOLVED on 6/8/2018
#
# Problem 65 - Convergents of e
#
###

from fractions import Fraction

MAX = 100


def e_fraction_part(n):
    n = n - 1
    if n % 3 == 1:
        return ((n // 3) + 1) * 2
    return 1


def convergents_of_e(n):
    if n == MAX:
        return Fraction(2 + (1 / convergents_of_e(n - 1)))
    if n == 1:
        return e_fraction_part(MAX - n)
    return Fraction(e_fraction_part(MAX - n) + (1 / convergents_of_e(n - 1)))


def apply_convergence(n):
    return sum(map(lambda x: int(x), str(convergents_of_e(n)).split('/')[0]))


print(apply_convergence(MAX))

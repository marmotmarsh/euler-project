###
#
# Created by Holden on 2/1/2016
#
# SOLVED on 2/1/2016
#
# Problem 24 - Lexicographic Permutations
#
###

from math import factorial as fact

def lex_perms(digits, value, i=1):
    f = fact(len(digits) - 1)
    if f == value:
        return digits
    if f < value:
        new_digs = digits[i] + ''.join(sorted(digits[0:i] + digits[i+1:]))
        return lex_perms(new_digs, value - f, i = i + 1)
    else:
        return digits[0] + lex_perms(digits[1:], value, i=1)
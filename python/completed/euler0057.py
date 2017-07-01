###
#
# Created by Holden on 6/24/2017
#
# COMPLETED on 7/1/2017
#
# Problem 57 - Square Root Convergents
#
###

from math import log10
from math import floor

def square_root_convergents(bound):
    num_cur = 3
    den_cur = 2

    bigger_num = 0

    for n in range(bound-1):
        num_prev = num_cur
        den_prev = den_cur
        num_cur = num_prev + (2 * den_prev)
        den_cur = num_prev + den_prev

        if floor(log10(num_cur)) > floor(log10(den_cur)):
            bigger_num += 1

    return bigger_num

print(square_root_convergents(1000))

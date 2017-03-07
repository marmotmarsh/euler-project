###
#
# Created by Holden on 12/18/2015
#
# SOLVED on 12/18/2015
#
# Problem 20 - Factorial Digit Sum
#
###

import math

def factorial_digit_sum(value):
    fact = math.factorial(value)
    total = 0
    
    while fact > 0:
        total += fact % 10
        fact = fact // 10
    
    return total

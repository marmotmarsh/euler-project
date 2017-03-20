###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 1/10/2016
#
# Problem 16 - Power Digit Sum
#
###

def power_digit_sum(exponent):
    
    value = 0
    
    for digit in str(2 ** exponent):
        value += int(digit)
        
    return value
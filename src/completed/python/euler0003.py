###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 3 - Largest Prime Factor
#
###

def largest_prime_factor(value):
    for i in range(2, value + 1):
        if value % i == 0:
            new_ub = int(value / i)
            
            if new_ub == 1:
                return value
            else:
                return largest_prime_factor(new_ub)

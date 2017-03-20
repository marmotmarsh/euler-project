###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 10 - Summation of Primes
#
###

import math

def sum_primes(bound):
    is_prime = True
    sum = 5
    
    for i in range(5, bound, 2):
        for j in range(3, int(math.sqrt(i)) + 1, 2):
            if i % j == 0:
                is_prime = False
                break
                
        if is_prime:
            sum += i
        else:
            is_prime = True
            
    return sum
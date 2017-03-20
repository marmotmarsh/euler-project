###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 1/6/2016
#
# Problem 12 - Highly Divisible Triangle Number
#
###

import math

def count_divisors(value):
    divisors = 1
    for i in range(2, math.ceil(math.sqrt(value)) + 1):
        count = 1
        
        while value % i == 0:
            value = value // i
            count += 1
        
        divisors *= count
    
    return divisors

def triangle_factors(factors):
    count = 3
    triangle = 3
    
    z_prime = count_divisors(triangle)
    
    while z_prime <= factors:
        triangle += count
        count += 1
        z_prime = count_divisors(triangle)
    
    return triangle
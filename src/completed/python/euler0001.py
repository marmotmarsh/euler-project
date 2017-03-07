###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 1 - Multiples of 3 and 5
#
###

def sum_multiples(upper_bound, m1, m2):
    final = 0
    
    for i in range(1, upper_bound):
        if i % m1 == 0:
            final += i
        elif i % m2 == 0:
            final += i
            
    return final
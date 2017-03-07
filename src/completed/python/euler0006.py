###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 2 - Sum Square Difference
#
###

def sum_square_difference(ubound):
    sum_of_square = 0
    square_of_sum = 0
    
    for i in range(ubound):
        sum_of_square += (i + 1) ** 2
        
    for i in range(ubound):
        square_of_sum += (i + 1)
        
    square_of_sum = square_of_sum ** 2
    
    return square_of_sum - sum_of_square
    
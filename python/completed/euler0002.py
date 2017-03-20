###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 2 - Even Fibonacci Numbers
#
###

def even_fibonacci(upper_bound):
    f1 = 1
    f2 = 2
    fib_sum = 0
    
    while f2 < upper_bound:
        if f2 % 2 == 0:
            fib_sum += f2
        place = f2
        f2 += f1
        f1 = place
        
    return fib_sum
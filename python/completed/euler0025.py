###
#
# Created by Holden on 2/18/2016
#
# SOLVED on 2/18/2016
#
# Problem 25 - 1,000-Digit Fibonacci Number
#
###

def fibonacci(digits):
    bound = 10 ** (digits - 1)
    n1 = 1
    n2 = 1
    temp = 0
    fib = n1 + n2
    count = 3
    
    while fib < bound:
        temp = fib
        fib += n2
        n1 = n2
        n2 = temp
        count += 1
    
    return count
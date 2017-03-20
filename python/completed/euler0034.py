###
#
# Created by Holden on 6/15/2016
#
# SOLVED on 6/15/2016
#
# Problem 34 - Digit Factorials
#
###

import math

def digitFactorial(number):
    if number < 10:
        return math.factorial(number)
    return math.factorial(number % 10) + digitFactorial(number // 10)

def findAllDigitFactorials(bound):
    digitFactorialList = []
    
    for i in range(10, bound):
        if digitFactorial(i) == i:
            digitFactorialList.append(i)
            
    return digitFactorialList
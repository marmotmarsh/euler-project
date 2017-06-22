###
#
# Created by Holden on 6/12/2016
#
# SOLVED on 6/12/2016
#
# Problem 48 - Self Powers
#
###

def selfPowers(exp):
    total = 0
    for i in range(1, exp + 1):
        total += (i ** i)
    
    return total

print(selfPowers(1000))
###
#
# Created by Holden on 6/13/2016
#
# SOLVED on 6/13/2016
#
# Problem 29 - Distinct Powers
#
###

def distinctPowers(a, b):
    powersSet = set()
    
    for i in range(2, a + 1):
        for j in range(2, b + 1):
            powersSet.add(i ** j)
            
    return len(powersSet)
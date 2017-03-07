###
#
# Created by Holden on 7/16/2016
#
# 
#
# Problem 53 - Combinatoric Selections
#
###

from math import factorial as f

def choose(r, n):
    return f(n) // (f(r) * f(n - r))

def combinatorialSelections():
    total = 0
    
    for total in range(1, 101):
        for subset in range(1, total + 1):
            if choose(subset, total) > 1000000:
                total += 1
    
    return total
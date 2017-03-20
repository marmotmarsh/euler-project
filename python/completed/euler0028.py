###
#
# Created by Holden on 6/12/2016
#
# SOLVED on 6/12/2016
#
# Problem 28 - Number Spiral Diagonals
#
###

def number_spiral_diagonals(diameter):
    radius = diameter // 2
    total = 1
    current = 1
    
    for i in range(1, radius + 1):
        for j in range(4):
            current += 2*i
            total += current
    
    return total
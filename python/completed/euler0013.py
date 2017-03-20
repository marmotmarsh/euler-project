###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 13 - Large Sum
#
###

def large_sum(filename, digits):
    numbers = open(filename, "r")
    
    sum = 0
    
    for line in numbers:
        line.strip()
        sum += int(line)
        
    while len(str(sum)) > 10:
        sum = sum // 10
        
    return sum

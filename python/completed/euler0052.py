###
#
# Created by Holden on 7/16/2016
#
# SOLVED on 7/16/2016
#
# Problem 52 - Permuted Multiples
#
###

def permutedMultiples():
    for i in range(100000, 1000000 // 6):
        check = True
        multipleList = [2 * i, 3 * i, 4 * i, 5 * i, 6 * i]
        first = "".join(sorted(str(i)))
        
        for multiple in multipleList:
            if first != "".join(sorted(str(multiple))):
                check = False
                continue
        
        if check:
            return i
        
    return "None"
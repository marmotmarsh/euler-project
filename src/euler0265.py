###
#
# Created by Holden on 4/16/2016
#
# 
#
# Problem 265 - Binary Circles
#
###

def reciprocal_cycles(bound):
    longest = ""
    integer = 0
    for i in range(2, bound):
        decimal = 1 / i
        decimal = str(decimal)
        decimal = decimal[2:]
        cycle = recurring_cycle(decimal)
        if len(cycle) > len(longest):
            longest = cycle
            integer = i
    return longest

def recurring_cycle(decimal, recur = ""):
    """
    decimal is all the integers after the decimal in string form
    """
    i = len(recur)
    if len(decimal) == 0:
        return recur
    if recur == decimal[-i:] and recur == decimal[-2*i:-i]:
        return recur
    return recurring_cycle(decimal[:-1], decimal[-1] + recur)
    
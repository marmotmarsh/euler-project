###
#
# Created by Holden on 6/13/2016
#
# SOLVED on 6/13/2016
#
# Problem 30 - Digit Fifth Powers
#
###

def digitFifthPowers(power):
    numbersList = []
    
    for i in range(2, (9 ** power) * power):
        if i == digitPowers(i, power):
            numbersList.append(i)
    
    return sum(numbersList)
    
def digitPowers(number, power):
    if number < 10:
        return number ** power
    return digitPowers((number // 10), power) + ((number % 10) ** power)
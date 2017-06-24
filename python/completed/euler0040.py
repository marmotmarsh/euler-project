###
#
# Created by Holden on 3/22/2017
#
# COMPLETED on 6/22/2017
#
# Problem 40 - Champernowne's Constant
#
###



def champernownes_constant(n):
    string = "0"
    i = 0

    while len(string) <= 1000000:
        i += 1
        string += str(i)

    total = 1

    for i in range(n):
        print(string[10**i])
        total *= int(string[10**i])

    return total

print(champernownes_constant(7))
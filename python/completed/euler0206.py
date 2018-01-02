###
#
# Created by Holden on 1/1/2018
#
# COMPLETED on 1/1/2018
#
# Problem 206 - Concealed Square
#
###

import re


def concealed_square():
    regex = re.compile('1\d2\d3\d4\d5\d6\d7\d8\d9\d0')
    base = 1414213560
    end = 1000000000

    while base > end:
        square = str(base * base)
        if bool(regex.fullmatch(square)):
            return base

        base -= 10

    return "Couldn't find pattern"


print(concealed_square())

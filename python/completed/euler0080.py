###
#
# Created by Holden on 6/8/2018
#
# SOLVED on 6/8/2018
#
# Problem 80 - Square Root Digital Expansion
#
###

from decimal import Decimal, localcontext


def square_root_digital_expansion(n):
    total = 0
    with localcontext() as ctx:
        ctx.prec = 102
        for x in range(1, n + 1):
            y = str(Decimal(x).sqrt(ctx))
            if (len(y) == 103):
                dec = y.replace('.', '')
                total += sum(map(lambda x: int(x), dec[:100]))

    return total


print(square_root_digital_expansion(100))

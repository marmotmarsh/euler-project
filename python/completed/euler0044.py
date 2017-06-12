###
#
# Created by Holden on 5/25/2017
#
# COMPLETED on 6/7/2017
#
# Problem 44 - Pentagon Numbers
#
###

import math


def pentagon_numbers():
    pentagons = [1, 5]
    n = 2

    while True:
        n += 1
        p2 = (n * (3 * n - 1)) // 2
        pentagons.append(p2)
        for p1 in pentagons:
            if (p2 - p1) in pentagons:
                if quadratic_int(3, -1, -2*(p2+p1)):
                    print(p1, p2)
                    return p2 - p1


def quadratic_int(a, b, c):
    d = (b * b) - (4 * a * c)
    if d < 0:
        return False

    if d == 0:
        return (-b / (2 * a)).is_integer()

    x1 = ((-b) + math.sqrt(d)) / (2 * a)
    x2 = ((-b) - math.sqrt(d)) / (2 * a)

    #print(x1, x2)

    return (x1.is_integer() and x1 >= 0) or (x2.is_integer() and x2 >= 0)

print(pentagon_numbers())

###
#
# Created by Holden on 12/8/2017
#
# COMPLETED on 12/10/2017
#
# Problem 63 - Powerful Digits Count
#
###

import math


def powerful_digits_count():
    powerful = []
    base = 1
    power = 1
    temp = base ** power

    while base < 10:
        while (int(math.log10(temp)) + 1) >= power:
            if (int(math.log10(temp)) + 1) == power:
                powerful.append([base, power, temp])
            power += 1
            temp = base ** power

        base += 1
        power = 1
        temp = base ** power
    print(powerful)

    return len(powerful)


print(powerful_digits_count())

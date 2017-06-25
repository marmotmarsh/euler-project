###
#
# Created by Holden on 6/24/2016
#
# COMPLETED on 6/25/2017
#
# Problem 64 - Odd Period Square Roots
#
###

from math import sqrt
from math import floor


class Period:
    def __init__(self, x):
        self._x = x
        self._s = 0
        self._periods = self.calculate_period(x)

    def calculate_period(self, x):
        self._s = floor(sqrt(x))
        return self.recur_period(1, x, self._s, [])

    def recur_period(self, n, x, d, periods):
        new_d = x - (d * d)
        new_d = new_d // n
        new_n = d

        a = 0
        while sqrt(x) + new_n - new_d > 0:
            new_n -= new_d
            a += 1
        periods.append(a)

        if a == 2*self._s:
            return periods

        return self.recur_period(new_d, x, -new_n, periods)

    def length(self):
        return len(self._periods)

    def __repr__(self):
        periods_t = tuple(self._periods)
        return "√{}:=[{}:{}]".format(self._x, self._s, periods_t)


def odd_period_square_roots(bound):
    count = 0

    for i in range(2, bound+1):
        if floor(sqrt(i))**2 == i:
            continue
        p = Period(i)
        if p.length() % 2 == 1:
            count += 1

    return count


print(odd_period_square_roots(10000))

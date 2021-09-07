###
#
# Created by Holden on 6/24/2016
#
#
#
# Problem 243 - Resilience
#
###

import math


class Queue:
    def __init__(self):
        self._queue = []

    def enqueue(self, x):
        self._queue.insert(0, x)

    def dequeue(self):
        return self._queue.pop(-1)

    def peak(self):
        if self.is_empty():
            return None
        return self._queue[-1]

    def is_empty(self):
        return len(self._queue) < 1

    def length(self):
        return len(self._queue)

    def __repr__(self):
        return repr(self._queue[::-1])


primes = open("../data/primes10000.txt", "r")
primes_list = Queue()
for row in primes:
    row_list = list(map(int, row.strip().split()))
    [primes_list.enqueue(x) for x in row_list]


def resilience(r_bound, d_bound):
    d = 2
    primes_list.dequeue()
    r = 1

    while (r / (d-1)) >= (r_bound / d_bound):
        d += 1
        if primes_list.peak() == d:
            primes_list.dequeue()
            continue

        r = 1

        for i in range(2, d):
            if math.gcd(i, d) == 1:
                r += 1

    return d

print(resilience(15499, 94744))

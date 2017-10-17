###
#
# Created by Holden on 12/18/2015
#
# COMPLETED on 10/17/2017
#
# Problem 21 - Amicable Numbers
#
###


def proper_divisors(n):
    divisors = []

    for i in range(1, n // 2 + 1):
        if n % i == 0:
            divisors.append(i)

    return divisors


def amicable_numbers(bound):
    sums_array = [-1, -1]

    for i in range(2, bound):
        divisors = proper_divisors(i)
        sum_divisors = 0
        for divisor in divisors:
            sum_divisors += divisor

        sums_array.append(sum_divisors)

    amicable_sum = 0

    for i in range(bound):
        if (sums_array[i] >= 0) and (sums_array[i] < bound) and (i == sums_array[sums_array[i]]) and (sums_array[i] != i):
            amicable_sum += sums_array[i]

    return amicable_sum

print(amicable_numbers(10000))

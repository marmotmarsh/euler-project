###
#
# Created by Holden on 12/18/2015
#
# 
#
# Problem 23 - Non-Abundant Sums
#
###


def proper_divisors(n):
    divisors = []

    for i in range(1, n // 2 + 1):
        if n % i == 0:
            divisors.append(i)

    return divisors

    
def non_abundant_sums(bound):
    abundant_sums = []

    for i in range(2, bound):
        divisors = proper_divisors(i)
        divisor_sum = 0
        for divisor in divisors:
            divisor_sum += divisor

        if divisor_sum > i:
            abundant_sums.append(i)

    final_sums = [i for i in range(bound+1)]

    for i in abundant_sums:
        for j in abundant_sums:
            if i + j <= bound:
                final_sums[i+j] = 0

    return sum(final_sums)


print(non_abundant_sums(28123))

###
#
# Created by Holden on 3/2/2017
#
# COMPLETED on 3/9/2017
#
# Problem 26 - Reciprocal Cycles
#
###

import sys

def reciprocal_cycles(d):
    string_digits = []

    for i in range(1, d):
        count = 0
        remainders = []
        num = 1
        rem = 1

        while (num < i):
            num *= 10

        while (rem not in remainders):
            remainders.append(rem)
            rem = (num*rem) % i
            count += 1

        string_digits.append(count)

    return max(string_digits)

def __main__(d):
    print(reciprocal_cycles(d))

if __name__ == "__main__":
    __main__(int(sys.argv[1]))

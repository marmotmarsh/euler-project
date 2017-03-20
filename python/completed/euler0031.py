###
#
# Created by Holden on 3/9/2017
#
# COMPLETED on 3/14/2017
#
# Problem 31 - Coin Sums
#
###

import sys

DENOMINATIONS = [1, 2, 5, 10, 20, 50, 100, 200]

def coin_sums(m, n):
    if n == 0:
    	return 1

    if n < 0:
    	return 0

    if m <= 0:
    	return 0

    return coin_sums(m-1, n) + coin_sums(m, n-DENOMINATIONS[m-1])


def __main__(d):
    print(coin_sums(len(DENOMINATIONS), d))

if __name__ == "__main__":
    __main__(int(sys.argv[1]))

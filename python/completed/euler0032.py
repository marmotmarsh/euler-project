###
#
# Created by Holden on 3/14/2017
#
# COMPLETED on 3/14/2017
#
# Problem 32 - Pandigital Products
#
###

import sys
import itertools

def pandigital_products():
    products = set()

    digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for i in range(1, 5):
    	for factor1 in list(itertools.permutations(digits, i)):
    		digits1 = [s for s in digits if s not in factor1]
    		factor1 = int("".join(map(str,factor1)))

    		for j in range(5-i, 5):
    			for factor2 in list(itertools.permutations(digits1, j)):
    				digits2 = [s for s in digits1 if s not in factor2]
    				factor2 = int("".join(map(str,factor2)))

    				product = factor1 * factor2
    				if len(str(product)) == len(digits2):
    					if set(map(int, list(str(product)))) == set(digits2):
    						products.add(product)

    return sum(products)

def __main__():
    print(pandigital_products())

if __name__ == "__main__":
    __main__()

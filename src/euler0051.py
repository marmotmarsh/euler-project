###
#
# Created by Holden on 7/8/2016
#
# 
#
# Problem 53 - Combinatoric Selections
#
###

import math

TRAIL = ["1", "3", "7", "9"]

def primeDigitReplacements():
    primeList = []
    for i in range(10, 100):
        if isPrime(i):
            primeList.append(i)
            
    print(primeList)
            
    for trail in TRAIL:
        totalPrimes = 0
        for i in range(1, 10):
            if int(str(i) + trail) in primeList:
                totalPrimes += 1
        if totalPrimes >= 7:
            return "1" + trail
    
    return "None"
    
### http://stackoverflow.com/questions/18833759/python-prime-number-checker
def isPrime(n):
    if n % 2 == 0 and n > 2: 
        return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True
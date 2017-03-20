###
#
# Created by Holden on 6/12/2016
#
# SOLVED on 6/12/2016
#
# Problem 50 - Consecutive Prime Sum
#
###

primes = open("ez0050.txt", "r")
primesList = []

for row in primes:
    row = row.strip()
    row = row.split(",")
    row = row[:-1]
    row = map(int, row)
    primesList.extend(row)
    
len(primesList)

def consecutivePrimesSum(summands, bound):
    largestPrime = 0
    totalSum = 0
    i = 0
    
    while totalSum < bound:
        totalSum = sum(primesList[i:i + summands])
        
        if totalSum > largestPrime:
            if totalSum in primesList:
                largestPrime = totalSum
        
        i += 1
        
    return largestPrime

n = 500

for i in range(n, n + 100):
    primeSum = consecutivePrimesSum(i, 1000000)
    print("{}: {}".format(i, primeSum))
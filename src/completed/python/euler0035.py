###
#
# Created by Holden on 6/15/2016
#
# SOLVED on 6/15/2016
#
# Problem 35 - Circular Primes
#
###

primes = open("ez0035.txt", "r")
primesList = []

for row in primes:
    row = row.strip()
    row = row.split(",")
    row = row[:-1]
    row = map(int, row)
    primesList.extend(row)

primesList = set(primesList)

def circularIteration(number):
    number = str(number)
    circularSet = set()
    
    for i in range(len(number)):
        circularSet.add(int(number[i:] + number[:i]))
        
    return circularSet

def circularPrimes(primesList, bound):
    numbersSet = set(range(2, bound))
    circularPrimesSet = set()
    
    for number in numbersSet:
        circularSet = circularIteration(number)
        if primesList.issuperset(circularSet):
            circularPrimesSet.update(circularSet)
        #numbersSet.symmetric_difference_update(circularSet)
    
    return len(circularPrimesSet)
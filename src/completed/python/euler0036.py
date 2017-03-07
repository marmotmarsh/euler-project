###
#
# Created by Holden on 6/15/2016
#
# SOLVED on 6/15/2016
#
# Problem 36 - Double-Base Palindromes
#
###

def toBinary(number):
    if number == 1:
        return "1"
    return toBinary(number // 2) + str(number % 2)

def reverse(string):
    if len(string) == 1:
        return string
    return string[-1] + reverse(string[:-1])

def doubleBasePalindromes(bound):
    palindromeSum = 0
    
    for number in range(1, bound):
        if str(number) == reverse(str(number)):
            binary = toBinary(number)
            if binary == reverse(binary):
                palindromeSum += number
    
    return palindromeSum
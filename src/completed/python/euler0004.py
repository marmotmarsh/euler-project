###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 4 - Largest Palindrome Product
#
###

def palindrome_product(digits):
    palindrome = 0
    
    for i in range((10 ** (digits - 1)), (10 ** digits)):
        for j in range((10 ** (digits - 1)), (10 ** digits)):
            if str(i * j) == (str(i * j))[::-1]:
                if i * j > palindrome:
                    palindrome = i * j
            
    return palindrome
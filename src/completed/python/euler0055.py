###
#
# Created by Holden on 8/30/2016
#
# SOLVED on 9/8/2016
#
# Problem 55 - Lychrel Numbers
#
###

def reverse(string):
    if len(string) <= 1:
        return string
    return reverse(string[1:]) + string[0]

def lychrelNumbers():
    lychrel = 0
    
    for n in range(1, 10001):
        isLychrel = False
        number = n
        step = 0
        
        while step < 50:
            number += int(reverse(str(number)))
            if number == int(reverse(str(number))):
                isLychrel = True
                break
                
            step += 1
            
        if not isLychrel:
            lychrel += 1
            
    return lychrel
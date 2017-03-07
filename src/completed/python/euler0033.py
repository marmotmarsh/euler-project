###
#
# Created by Holden on 6/15/2016
#
# SOLVED on 6/15/2016
#
# Problem 33 - Digit Cancelling Fractions
#
###

def digitCancellingFractions():
    twoDigitList = []
    
    for i in range(10, 99):
        for j in range (i + 1, 100):
            if (j % 10) != 0:
                if (i % 10) == (j % 10):
                    if (i / j) == ((i // 10) / (j // 10)):
                        twoDigitList.append([i, j])
                if (i // 10) == (j % 10):
                    if (i / j) == ((i % 10) / (j // 10)):
                        twoDigitList.append([i, j])
                if (i % 10) == (j // 10):
                    if (i / j) == ((i // 10) / (j % 10)):
                        twoDigitList.append([i, j])
                if (i // 10) == (j // 10):
                    if (i / j) == ((i % 10) / (j % 10)):
                        twoDigitList.append([i, j])
        
    return twoDigitList
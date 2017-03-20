###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 17 - Number Letter Counts
#
###

digits = {1:3, 2:3, 3:5, 4:4, 5:4, 6:3, 7:5, 8:5, 9:4, 10:3, 11:6, 12:6, 13:8, 14:8, 15:7, 16:7, 17:9, 18:8, 19:8, 20:6, 30:6, 40:5, 50:5, 60:5, 70:7, 80:6, 90:6, 100:7, 1000:8}

def number_letter_counts(value):
    letter_sum = 0
    letter_sum += (digits[1000] + 3)   # term 1,000
    letter_sum += (digits[100] * 900)  # all instances of the word "hundred" (100 of them for each 100, 200, ..., 900)
    letter_sum += (3 * 891)            # all instances of the word "and" (99 of them for each 100, 200, ..., 900)
    
    for i in range(1, 10):
        letter_sum += (100 * digits[i])
    
    for i in range(2, 10):
        letter_sum += (digits[i*10] * 100)
    
    for i in range(10, 20):
        letter_sum += (digits[i] * 10)
    
    for i in range(1, 10):
        letter_sum += (digits[i] * (100 - 10))
    
    return letter_sum

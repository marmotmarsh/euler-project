###
#
# Created by Holden on 12/18/2015
#
# 
#
# Problem 21 - Amicable Numbers
#
###

def amicable_numbers(bound):
    amicable_sum = 0
    int_list = []
    
    for i in range(10000):
        int_list.append(i)
    
    while len(int_list) > 0:
        
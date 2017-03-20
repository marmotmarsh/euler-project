###
#
# Created by Holden on 12/18/2015
#
# 
#
# Problem 23 - Abundant Numbers
#
###

def abundant_numbers(bound):
    abund_list = []
    count = 1
    
    while count < bound:
        count += 1
        abund_sum = 0
        test = count
        
        for i in range(1, (count // 2) + 1):
            if abund_sum < count:
                if count % i == 0:
                    abund_sum += i
                    test = test // i
            else:
                break
        
        if abund_sum > count:
            abund_list.append(count)
        
    return abund_list
    
def abundant_sums(bound):
    abund_list = abundant_numbers(bound)
    sum_abund_set = set()
    
    for i in range(0, len(abund_list)):
        for j in range(i + 1, len(abund_list) + 1):
            sum_abund_set.add(i + j)
    
    abund_sum = sum(sum_abund_set)
    print(abund_sum)
    
    total_sum = (bound * (bound + 1)) // 2
    
    return total_sum - abund_sum
    
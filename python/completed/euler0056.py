###
#
# Created by Holden on 6/24/2017
#
# COMPLETED on 6/24/2017
#
# Problem 56 - Powerful Digit Sum
#
###


def powerful_digit_sum(bound):
    max_sum = 0
    for a in range(1, bound+1):
        for b in range(1, bound+1):
            power = a**b
            cur_sum = sum(list(map(int, list(str(power)))))
            #print("a = {}, b = {}, power = {}, sum = {}".format(a, b, power, cur_sum))
            if cur_sum > max_sum:
                max_sum = cur_sum
    
    return max_sum

print(powerful_digit_sum(100))

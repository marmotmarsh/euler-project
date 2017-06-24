###
#
# Created by Holden on 12/17/2015
#
# COMPLETED on 6/24/2017
#
# Problem 18 - Maximum Path Sum I
#
###

pyramid = open("../data/x0018.txt", "r")
pyramid_list = []
    
for line in pyramid:
    pyramid_list.append(list(map(int, line.strip().split(' '))))


def max_path_sum_i():
    current_row = pyramid_list[len(pyramid_list)-1]

    for i in range(len(pyramid_list)-2, -1, -1):
        lower_row = current_row
        current_row = pyramid_list[i]

        for j in range(i+1):
            current_row[j] += max((lower_row[j], lower_row[j+1]))

    return current_row[0]


print(max_path_sum_i())

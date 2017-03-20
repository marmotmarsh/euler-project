###
#
# Created by Holden on 12/17/2015
#
# 
#
# Problem 18 - Maximum Path Sum I
#
###

pyramid = open("../data/x0018.txt", "r")
pyramid_list = []
    
for row in pyramid:
    row = row.strip()
    row = row.split(" ")
    pyramid_list.append(row)

def max_path_sum_i(pyramid_list, row, index):
    print(pyramid_list)
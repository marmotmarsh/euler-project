###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 11 - Largest Product in a Grid
#
###

def greatest_product(mult, filename):
    import math
    new_list = []
    product = 1
    
    x20 = open(filename, "r")

    for alist in x20:
        element = alist.split()
        for i in range(20):
            new_list.append(int(element[i].strip()))
            
    index = int(math.sqrt(len(new_list)))
    short_index = index - mult + 1
    
    for i in range(index * short_index):
        n = new_list[i] * new_list[i + index] * new_list[i + (2 * index)] * new_list[i + (3 * index)]
        if n > product:
            product = n
    
    for i in range(short_index):
        for j in range(index):
            n = new_list[i + (j * index)] * new_list[i + (j * index) + 1] * new_list[i + (j * index) + 2] * new_list[i + (j * index) + 3]
            if n > product:
                product = n
    
    for i in range(short_index):
        for j in range(short_index):
            n = new_list[i + (j * index)] * new_list[i + ((j + 1) * index) + 1] * new_list[i + ((j + 2) * index) + 2] * new_list[i + ((j + 3) * index) + 3]
            if n > product:
                product = n
    
    for i in range(short_index):
        for j in range(short_index):
            n = new_list[i + 3 + (j * index)] * new_list[i + 2 + ((j + 1) * index)] * new_list[i + 1 + ((j + 2) * index)] * new_list[i + ((j + 3) * index)]
            if n > product:
                product = n

    return product    
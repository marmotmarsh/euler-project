###
#
# Created by Holden on 5/25/2017
#
# COMPLETED on 5/25/2017
#
# Problem 42 - Coded Triangle Numbers
#
###

import math

shift = 64

words = open("../data/x0042.txt", "r")
words_list = []

for line in words:
    words_list.extend(word.strip('"') for word in line.strip().split(","))


def coded_triangle_numbers():
    triangles = 0

    for word in words_list:
        score = sum([(ord(c) - 64) for c in word])
        n = math.floor(math.sqrt(score*2))
        if n*(n+1)/2 == score:
            triangles += 1

    return triangles


print(coded_triangle_numbers())

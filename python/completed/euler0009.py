###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 12/17/2015
#
# Problem 9 - Special Pythagorean Triplet
#
###

def pythagorean_triplet(sum):
    for a in range(1, sum):
        for b in range(a + 1, sum):
            for c in range(b + 1, sum):
                if a + b + c == sum:
                    if (a ** 2) + (b ** 2) == (c ** 2):
                        return a * b * c

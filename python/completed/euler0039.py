###
#
# Created by Holden on 3/20/2017
#
# COMPLETED: 5/24/2017
#
# Problem 39 - Integer Right Triangles
#
###

def integer_right_triangles(p_max):
    perims = {}
    for i in range(p_max):
        perims[i] = []

    for a in range(1, p_max//3):
        for b in range(a, (p_max-a)//2):
            for c in range(b, (p_max-a-b)):
                if (a**2 + b**2) == c**2:
                    # print("a = {}: b = {}: c = {}".format(a, b, c))
                    perims[a+b+c].append([a, b, c].sort())

    max_perim = 0
    max_len = 0
    for key, value in perims.items():
        if len(value) > max_len:
            max_perim = key
            max_len = len(value)

    return max_perim


print(integer_right_triangles(1000))

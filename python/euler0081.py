###
#
# Created by Holden on 6/24/2016
#
# COMPLETE on 6/24/2017
#
# Problem 81 - Path Sum: Two Ways
#
###

x81 = open("../data/x0081.txt", "r")

matrix = []

for line in x81:
    matrix.append(list(map(int, line.strip().split(','))))


def path_sum_two_ways(array):
    memo = [[-1 for j in range(len(array))] for i in range(len(array))]
    find_min_path(memo, 0, 0, 0, len(array)-1, array)

    return memo[-1][-1]


def find_min_path(memo, d, x, y, max_xy, array):
    d += array[x][y]

    if memo[x][y] != -1 and memo[x][y] < d:
        return

    memo[x][y] = d

    if x == max_xy and y == max_xy:
        return

    if x == max_xy:
        return find_min_path(memo, d, x, y+1, max_xy, array)

    if y == max_xy:
        return find_min_path(memo, d, x+1, y, max_xy, array)

    find_min_path(memo, d, x, y+1, max_xy, array)
    find_min_path(memo, d, x+1, y, max_xy, array)


print(path_sum_two_ways(matrix))

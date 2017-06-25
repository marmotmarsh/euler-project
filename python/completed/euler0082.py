###
#
# Created by Holden on 6/24/2016
#
# COMPLETED on 6/24/2017
#
# Problem 82 - Path Sum: Three Ways
#
###

x82 = open("../data/x0082.txt", "r")

short = [[131, 201, 630, 537, 805],
         [673, 96, 803, 699, 732],
         [234, 342, 746, 497, 524],
         [103, 965, 422, 121, 37],
         [18, 150, 111, 956, 331]]

matrix = []
for line in x82:
    matrix.append(list(map(int, line.strip().split(','))))


def path_sum_three_ways(array):
    starts = []

    for i in range(len(array)):
        memo = [[sum(array[j][:k+1]) for k in range(len(array))] for j in range(len(array))]
        find_min_path(memo, 0, i, 0, len(array)-1, array)
        starts.append(min([memo[x][-1] for x in range(len(array))]))

    return min(starts)


def find_min_path(memo, d, x, y, max_xy, array):

    d += array[x][y]

    if memo[x][y] < d:
        return

    memo[x][y] = d

    if y != max_xy:
        find_min_path(memo, d, x, y+1, max_xy, array)

    if x != max_xy:
        find_min_path(memo, d, x+1, y, max_xy, array)

    if x != 0:
        find_min_path(memo, d, x-1, y, max_xy, array)


print(path_sum_three_ways(matrix))

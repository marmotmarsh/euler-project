###
#
# Created by Holden on 6/24/2016
#
# COMPLETED on 6/24/2017
#
# Problem 83 - Path Sum: Four Ways
#
###

x83 = open("../data/x0083.txt", "r")

short = [[131, 201, 630, 537, 805],
         [673, 96, 803, 699, 732],
         [234, 342, 746, 497, 524],
         [103, 965, 422, 121, 37],
         [18, 150, 111, 956, 331]]

matrix = []
for line in x83:
    matrix.append(list(map(int, line.strip().split(','))))


def path_sum_four_ways(array):
    memo = [[-1 for k in range(len(array))] for j in range(len(array))]
    find_min_path_two(memo, 0, 0, 0, len(array)-1, array)
    find_min_path_four(memo, 0, 0, 0, len(array)-1, array)

    return memo[-1][-1]


def find_min_path_two(memo, d, x, y, max_xy, array):
    d += array[x][y]

    if memo[x][y] != -1 and memo[x][y] <= d:
        return

    memo[x][y] = d

    if y != max_xy:
        find_min_path_two(memo, d, x, y+1, max_xy, array)

    if x != max_xy:
        find_min_path_two(memo, d, x+1, y, max_xy, array)


def find_min_path_four(memo, d, x, y, max_xy, array):

    d += array[x][y]

    if memo[x][y] < d:
        return

    memo[x][y] = d

    if y != max_xy:
        find_min_path_four(memo, d, x, y+1, max_xy, array)

    if x != max_xy:
        find_min_path_four(memo, d, x+1, y, max_xy, array)

    if x != 0:
        find_min_path_four(memo, d, x-1, y, max_xy, array)

    if y != 0:
        find_min_path_four(memo, d, x, y-1, max_xy, array)


print(path_sum_four_ways(matrix))

###
#
# Created by Holden on 12/31/2017
#
#
#
# Problem 79 - Passcode Derivations
#
###


PYRAMID = open("../data/x0067.txt", "r")
PYRAMID_LIST = []

for line in PYRAMID:
    PYRAMID_LIST.append(list(map(int, line.strip().split(' '))))


def max_path_sum_ii():
    current_row = PYRAMID_LIST[len(PYRAMID_LIST) - 1]

    for i in range(len(PYRAMID_LIST) - 2, -1, -1):
        lower_row = current_row
        current_row = PYRAMID_LIST[i]

        for j in range(i + 1):
            current_row[j] += max((lower_row[j], lower_row[j + 1]))

    return current_row[0]


print(max_path_sum_ii())

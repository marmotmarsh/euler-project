###
#
# Created by Holden on 12/29/2017
#
# COMPLETED on 12/31/2017
#
# Problem 61 - Cyclical Figurate Numbers
#
###


def triangle():
    n = 1
    n_val = 1
    n_list = set()

    while n_val < 10000:
        if n_val >= 1000:
            n_list.add(n_val)
        n += 1
        n_val = (n * (n + 1)) // 2

    return n_list


def square():
    n = 1
    n_val = 1
    n_list = set()

    while n_val < 10000:
        if n_val >= 1000:
            n_list.add(n_val)
        n += 1
        n_val = n * n

    return n_list


def pentagonal():
    n = 1
    n_val = 1
    n_list = set()

    while n_val < 10000:
        if n_val >= 1000:
            n_list.add(n_val)
        n += 1
        n_val = (n * ((3 * n) - 1)) // 2

    return n_list


def hexagonal():
    n = 1
    n_val = 1
    n_list = set()

    while n_val < 10000:
        if n_val >= 1000:
            n_list.add(n_val)
        n += 1
        n_val = n * ((2 * n) - 1)

    return n_list


def heptagonal():
    n = 1
    n_val = 1
    n_list = set()

    while n_val < 10000:
        if n_val >= 1000:
            n_list.add(n_val)
        n += 1
        n_val = (n * ((5 * n) - 3)) // 2

    return n_list


def octagonal():
    n = 1
    n_val = 1
    n_list = set()

    while n_val < 10000:
        if n_val >= 1000:
            n_list.add(n_val)
        n += 1
        n_val = n * ((3 * n) - 2)

    return n_list


LISTS = {
    3: triangle(),
    4: square(),
    5: pentagonal(),
    6: hexagonal(),
    7: heptagonal(),
    8: octagonal()
}


def is_linked(a, b):
    return a % 100 == b // 100


def cycle(roots):
    cycle_list = [[3, 0]]

    for num1 in LISTS[3]:
        cycle_list[0][1] = num1
        for root2 in [x for x in roots if not roots[x]]:
            roots[root2] = True
            cycle_list.append([root2, 0])
            for num2 in LISTS[root2]:
                if is_linked(cycle_list[-2][1], num2):
                    cycle_list[-1][1] = num2
                    for root3 in [x for x in roots if not roots[x]]:
                        roots[root3] = True
                        cycle_list.append([root3, 0])
                        for num3 in LISTS[root3]:
                            if is_linked(cycle_list[-2][1], num3):
                                cycle_list[-1][1] = num3
                                for root4 in [x for x in roots if not roots[x]]:
                                    roots[root4] = True
                                    cycle_list.append([root4, 0])
                                    for num4 in LISTS[root4]:
                                        if is_linked(cycle_list[-2][1], num4):
                                            cycle_list[-1][1] = num4
                                            for root5 in [x for x in roots if not roots[x]]:
                                                roots[root5] = True
                                                cycle_list.append([root5, 0])
                                                for num5 in LISTS[root5]:
                                                    if is_linked(cycle_list[-2][1], num5):
                                                        cycle_list[-1][1] = num5
                                                        for root6 in [x for x in roots if not roots[x]]:
                                                            roots[root6] = True
                                                            cycle_list.append(
                                                                [root6, 0])
                                                            for num6 in LISTS[root6]:
                                                                if is_linked(cycle_list[-2][1], num6):
                                                                    cycle_list[-1][1] = num6

                                                                    if is_linked(num6, cycle_list[0][1]):
                                                                        return cycle_list

                                                            cycle_list = cycle_list[:-1]
                                                            roots[root6] = False
                                                cycle_list = cycle_list[:-1]
                                                roots[root5] = False
                                    cycle_list = cycle_list[:-1]
                                    roots[root4] = False
                        cycle_list = cycle_list[:-1]
                        roots[root3] = False
            cycle_list = cycle_list[:-1]
            roots[root2] = False

    return []


def cyclical_figurate_numbers():
    roots = {
        3: True,
        4: False,
        5: False,
        6: False,
        7: False,
        8: False,
    }

    final = cycle(roots)

    return sum([x[1] for x in final])


print(cyclical_figurate_numbers())

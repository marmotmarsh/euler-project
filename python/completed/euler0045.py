###
#
# Created by Holden on 6/7/2017
#
# COMPLETED on 6/7/2017
#
# Problem 45 - Triangular, Pentagonal, and Hexagonal
#
###



def triangular_pentagonal_hexagonal():
    t = 2
    p = 2
    h = 2
    triangular = {1, 3}
    pentagonal = {1, 5}
    hexagonal = {1, 6}
    tmax = 3
    pmax = 5
    hmax = 6

    while True:
        t += 1
        tmax = triangle(t)
        triangular.add(tmax)

        if tmax > pmax:
            p += 1
            pmax = pentagon(p)
            pentagonal.add(pmax)

        if tmax > hmax:
            h += 1
            hmax = hexagon(h)
            hexagonal.add(hmax)

        if (tmax in pentagonal) and (tmax in hexagonal):
            if t != 285:
                return tmax

def triangle(n):
    return (n * (n + 1)) // 2

def pentagon(n):
    return (n * ((3 * n) - 1)) // 2

def hexagon(n):
    return (n * ((2 * n) - 1))

print(triangular_pentagonal_hexagonal())

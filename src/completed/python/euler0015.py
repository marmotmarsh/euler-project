###
#
# Created by Holden on 12/17/2015
#
# SOLVED on 4/16/2016
#
# Problem 15 - Lattice Paths
#
###

from math import factorial as f

def lattice_paths(grid_size):
    choose = grid_size + (grid_size + 1) - 1
    return f(choose) // (f(grid_size) * f(choose - grid_size))
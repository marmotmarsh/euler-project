import timeit

euler = """
import completed.python.euler0001 as euler
"""

time = min(timeit.Timer('euler.sum_multiples(1000, 3, 5)', setup=euler).repeat(10, 1000))

print("This program averaged", time, "microseconds.")

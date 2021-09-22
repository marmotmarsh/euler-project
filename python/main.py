import sys
import time

from working.euler0096 import solve96

SOLUTIONS = {
  96: solve96
}

def main():
  args = sys.argv
  
  start = time.time()
  sol = SOLUTIONS[int(args[1])]()
  end = time.time()
  
  print("The solution took " + str(end - start) + " seconds")
  print(sol)
  
main()
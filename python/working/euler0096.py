
from euler_util.sudoku.board import Board
import re

# from ..util.sudoku.tile import Tile
# from ..util.sudoku.board import Board

def solve96() -> int:
  print("Solving problem 96")
  sudoku_file = open("./data/x0096.txt", "r")
  sudokus: list[Board] = []
  current_sudoku: list[list[int]] = []

  for line in sudoku_file:
    if re.match("^Grid", line):
      if len(current_sudoku) > 0:
        sudokus.append(Board(current_sudoku))
        current_sudoku = []
    else:
      current_sudoku.append([int(x) for x in line.strip()])
  sudokus.append(Board(current_sudoku))
  
  unsolved_count = 0
  
  # for x in range(len(sudokus) + 1):
  #   sudoku = sudokus[x]
  #   sudoku.solve()
  #   print('Solved sudoku: ' + str(x + 1))
  #   if not sudoku.is_solved():
  #     unsolved_count += 1
  #     print(sudoku)
  
  sudoku = sudokus[1]
  sudoku.solve()
  print(sudoku)
  
  return unsolved_count
  
solve96()
import math
from copy import copy
from typing import Union

from .tile import Tile

class Board:
  def __init__(self, vals: list[list[int]]) -> None:
    # input values into cells
    self.tiles: list[list[Tile]] = []
    for i in range(0, 9):
      self.tiles.append([])
      row = vals[i]
      for j in range(0, 9):
        cell = row[j]
        self.tiles[i].append(Tile(cell, i, j))
    
    # init possible vals in cells
    for x in range(0, 9):
      for y in range(0, 9):
        val = self.tiles[x][y].get_value()
        if val > 0:
          self.update_possibles(x, y)

  def __str__(self) -> str:
    cell_buffer_row = (("|" + (" " * 9)) * 3) + "|\n"
    quad_buffer_row = (("+" + ("-" * 9)) * 3) + "+\n"
    output = quad_buffer_row
    
    for y in range(len(self.tiles)):
      output += cell_buffer_row
      
      output += "|"
      row = self.tiles[y]
      for x in range(len(row)):
        cell = row[x]
        output += " " + (" " if cell.get_value() == 0 else str(cell)) + " "
        if x % 3 == 2:
          output += "|"
      output += "\n"
      
      output +=  cell_buffer_row
      if y % 3 == 2: 
        output += quad_buffer_row
      
    return output
  
  def tiles_empty(self) -> int:
    count = 0
    for row in self.tiles:
      for tile in row:
        if not tile.is_solved():
          count += 1
    return count
        
  def is_solved(self) -> bool:
    return self.tiles_empty() == 0
  
  def get_tile(self, x: int, y: int) -> Tile:
    return self.tiles[x][y]
  
  def get_tiles(self) -> list[list[Tile]]:
    return self.tiles
  
  def get_tile_values(self) -> list[list[int]]:
    return [[x.get_value() for x in row] for row in self.tiles]
  
  def get_row(self, x: int) -> list[Tile]:
    return self.tiles[x]
  
  def get_column(self, y: int) -> list[Tile]:
    return [row[y] for row in self.tiles]
  
  def get_quad(self, _x: int, _y: int) -> list[Tile]:
    cells: list[Tile] = []
    x = math.floor(_x / 3) * 3
    y = math.floor(_y / 3) * 3
    
    for i in range(x, x + 3):
      for j in range(y, y + 3):
        cells.append(self.tiles[i][j])
    
    return cells
  
  def update_possibles(self, x: int, y: int) -> None:
    val = self.tiles[x][y].get_value()
    
    row = self.get_row(x)
    for tile in row:
      tile.remove_possible(val)
      
    column = self.get_column(y)
    for tile in column:
      tile.remove_possible(val)
      
    quad = self.get_quad(x, y)
    for tile in quad:
      tile.remove_possible(val)
      
  def is_impossible(self) -> bool:
    for row in self.tiles:
      for tile in row:
        if tile.is_impossible():
          return True
    return False
  
  def get_empty_tiles(self) -> list[Tile]:
    tiles: list[Tile] = []
    for row in self.tiles:
      for tile in row:
        if not tile.is_solved():
          tiles.append(tile)
    tiles.sort()
    return tiles
      
  def solve(self) -> None:
    self.solve_naive()
    if not self.is_solved():
      new_tiles = self.solve_brute_force()
      if isinstance(new_tiles, list):
        self.tiles = new_tiles
      
  def solve_brute_force(self) -> Union[list[list[Tile]], None]:
    print(self)
    if not self.is_impossible():
      for tile in self.get_empty_tiles():
          if not tile.is_solved():
            x = tile.get_x()
            y = tile.get_y()
            for poss in tile.get_possibles():
              new_vals: list[list[int]] = copy(self.get_tile_values())
              new_vals[x][y] = poss
              new_board = Board(new_vals)
              new_board.solve_naive()
              new_tiles = new_board.solve_brute_force()
              if isinstance(new_tiles, list):
                return new_tiles
          
      
  def solve_naive(self) -> None:
    solved_a_tile = True
    
    while not self.is_solved() and solved_a_tile:
      solved_a_tile = False
      
      for x in range(0, 9):
        row = self.tiles[x]
        for y in range(0, 9):
          tile = row[y]
          if not tile.is_solved():
            possibles = tile.get_possibles()
            if len(possibles) == 1:
              tile.set_value(possibles[0])
              solved_a_tile = True
              self.update_possibles(x, y)
  
  
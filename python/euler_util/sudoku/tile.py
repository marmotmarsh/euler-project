NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

class Tile:
  def __init__(self, value: int, x: int, y: int) -> None:
    self.value = value
    self.x = x
    self.y = y
    if value == 0:
      self.possibles = [num for num in NUMS]
    else:
      self.possibles = []
      
  def __str__(self) -> str:
    return str(self.value)
      
  def get_possibles(self) -> list[int]:
    return self.possibles
  
  def get_value(self) -> int:
    return self.value
  
  def get_x(self) -> int:
    return self.x
  
  def get_y(self) -> int:
    return self.y
    
  def is_solved(self) -> bool:
    return self.value > 0
  
  def set_value(self, new_val: int) -> None:
    self.value = new_val
    self.possibles = []
    
  def remove_possible(self, val: int) -> None:
    self.possibles = [v for v in self.possibles if v != val]
    
  def is_impossible(self) -> bool:
    return self.value == 0 and len(self.possibles) == 0
  
  def _cmp(self, other: 'Tile') -> int:
    return len(self.possibles) - len(other.possibles)
      
  def __lt__(self, other: 'Tile') -> bool:
      return self._cmp(other) < 0

  def __le__(self, other: 'Tile') -> bool:
      return self._cmp(other) <= 0

  def __eq__(self, other: 'Tile') -> bool:
      return self._cmp(other) == 0

  def __ne__(self, other: 'Tile') -> bool:
      return self._cmp(other) != 0

  def __ge__(self, other: 'Tile') -> bool:
      return self._cmp(other) >= 0

  def __gt__(self, other: 'Tile') -> bool:
      return self._cmp(other) > 0
import math
import sympy

def isDiophantineY(y, d):
  result = math.sqrt((y * y * d) + 1)
  return result > 0 and result.is_integer()

def solve66(n):
  diophs = [0]
  
  for d in range(1, n + 1):
    if math.sqrt(d).is_integer():
      diophs.append(0)
      continue
    y = 1
    while not isDiophantineY(y, d):
      y += 1
    
    diophs.append(math.sqrt((y * y * d) + 1))
    
  return diophs.index(max(diophs))

print(solve66(100))
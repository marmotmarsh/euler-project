import math

MODULO = 1000000007
SMALLEST_SUM_MAP = {}
FIB_MAP = {}

def findSmallestSum (n):
  if n not in SMALLEST_SUM_MAP:
    x = math.floor(n / 9)
    num = ((n % 9) * (10 ** x)) + ((10 ** x) - 1)
    SMALLEST_SUM_MAP[n] = num
  
  return SMALLEST_SUM_MAP[n]

def findFib(n):
  if n <= 0:
    FIB_MAP[0] = 0
    fib = 0
  elif n == 1:
    FIB_MAP[1] = 1
    fib = 1
  else:
    if n - 1 in FIB_MAP:
      fib1 = FIB_MAP[n - 1]
    else:
      fib1 = findFib(n - 1)
    if n - 2 in FIB_MAP:
      fib2 = FIB_MAP[n - 2]
    else:
      fib2 = findFib(n - 2)
    fib = fib1 + fib2
    FIB_MAP[n] = fib
    
  return fib

def main(n):
  sum = 0
  start = 0
  end = 0

  for i in range(2, n + 1):
    currentSum = 0
    start = end + 1
    end = findFib(i)
    for k in range(start, end + 1):
      currentSum += (findSmallestSum(k) * (n + 1 - i))

    sum += currentSum

  return sum % MODULO

# for n in range(1, 15):
#   print(n, ':', main(n))

print(main(24))
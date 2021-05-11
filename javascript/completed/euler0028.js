export async function solve28() {
  const n = 1001;
  let sum = 1;
  let c = 1;
  let gridSize = 1;
  while (gridSize < n) {
    gridSize += 2;
    for (let i = 0; i < 4; i++) {
      c += gridSize - 1;
      sum += c;
    }
  }

  return sum;
}

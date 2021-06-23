export async function solve39() {
  const n = 1000;
  const maxShortestSide = n / 3;

  let perimeterMap = new Map();

  for (let x = 1; x <= n / 3; x++) {
    for (let y = x; y <= (n - x) / 2; y++) {
      for (let z = y; z <= n - (x + y); z++) {
        if (x * x + y * y === z * z) {
          const p = x + y + z;
          perimeterMap.set(p, (perimeterMap.get(p) || 0) + 1);
        }
      }
    }
  }

  let maxPerimeter = 0;
  let maxPerms = 0;

  perimeterMap.forEach((perms, perimeter) => {
    if (perms > maxPerms) {
      maxPerms = perms;
      maxPerimeter = perimeter;
    }
  });

  return maxPerimeter;
}

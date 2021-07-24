export function solve63() {
  let count = 0;
  for (let base = 0; base <= 9; base++) {
    for (let pow = 0; pow <= 20; pow++) {
      const result = Math.pow(base, pow);
      if (result.toString().length === pow) {
        count++;
      }
    }
  }

  return count;
}

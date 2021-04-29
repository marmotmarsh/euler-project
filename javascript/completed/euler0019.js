export async function solve19() {
  const day = 6; // Monday
  let total = 0;
  for (var year = 1901; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
      total += new Date(`${month}/1/${year}`).getDay() === day ? 1 : 0;
    }
  }
  return total;
}

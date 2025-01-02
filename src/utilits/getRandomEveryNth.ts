export function getRandomEveryNth<T>(arr: T[], n: number): T[] {
  if (n <= 0) {
    throw new Error("Step must be greater than 0");
  }

  // Вибираємо кожен n-й елемент
  const everyNth = arr.filter((_, index) => (index + 1) % n === 0);

  // Перемішуємо обрані елементи
  const shuffled = everyNth.sort(() => Math.random() - 0.5);

  return shuffled;
}

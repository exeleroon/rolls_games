export function findCommonElements(...arrays: number[][]): number[] {
  const length = arrays[0].length;

  for (let i = 0; i < length; i++) {
    const value = arrays[0][i]; // Значення з першого масиву
    const isMatch = arrays.every((array) => array[i] === value); // Перевіряємо інші масиви

    if (isMatch) {
      return true; // Якщо знайдено збіг, одразу повертаємо true
    }
  }

  return false; // Якщо жодного з
}

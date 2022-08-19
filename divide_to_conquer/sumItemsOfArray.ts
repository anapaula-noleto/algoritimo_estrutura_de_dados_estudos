function sum(arr: number[]): number {
  let total = 0;
  for (let number of arr) {
    total += number;
  }
  return total;
}
console.time('soma sem recursão');
console.log(sum([1, 2, 3, 4]));
console.timeEnd('soma sem recursão');

function sumArrayRecursively(arr: number[]): number {
  if (arr.length === 0) return 0;
  return (arr.shift() as number) + sumArrayRecursively(arr);
}

console.time('soma com recursão');
console.log(sumArrayRecursively([1, 2, 3, 4]));
console.timeEnd('soma com recursão');

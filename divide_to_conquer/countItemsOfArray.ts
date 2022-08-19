// livro entendendo algoritmos capítulo 4
function arrayLengthRecursively(arr: Array<number>): number {
  if (String(arr) === String([])) return 0;
  arr.pop();
  return 1 + arrayLengthRecursively(arr);
}

console.log(arrayLengthRecursively([1, 2, 3, 4, 5]));

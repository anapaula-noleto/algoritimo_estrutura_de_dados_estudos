function max(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  arr[0] > arr[1] ? arr.splice(1, 1) : arr.shift();
  return max(arr);
}

console.log(max([1, 10, 23, 7, 4, 88]));

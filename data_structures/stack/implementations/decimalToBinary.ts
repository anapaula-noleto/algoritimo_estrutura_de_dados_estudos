import {StackObject} from '../stack-object';
function decimalToBinary(decNumber: number) {
  let binaryString = '';
  const stack = new StackObject();
  while (decNumber !== 0) {
    stack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }
  while (!stack.isEmpty()) {
    binaryString += String(stack.pop());
  }
  return binaryString;
}

console.log(decimalToBinary(10));

class Stack<T> {
  private items: Array<T>;
  constructor() {
    this.items = [];
  }

  // esse método adiciona um novo elemento (ou vários elementos) ao topo da pilha
  push(element: T) {
    this.items.push(element);
  }

  // remove e devolve o elemento que está no topo da pilha
  pop() {
    this.items.pop();
  }

  // retorna o elemento que está no topo da pilha
  peek() {
    return this.items[-1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(3);
console.log(stack.isEmpty());

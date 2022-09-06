type Item = {
  [chave: number]: number;
};

export class StackObject {
  private count: number;
  private items: Item;
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: number) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}

// const stackObject = new StackObject();

// stackObject.push(3);
// stackObject.push(5);
// console.log(stackObject.peek());
// console.log(stackObject);
// console.log(stackObject.toString());
// stackObject.pop();
// console.log(stackObject.toString());
// stackObject.push(8);
// console.log(stackObject.toString());
// stackObject.clear();
// console.log(stackObject);

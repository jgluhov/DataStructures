export default class Stack<T> {
  private dataStore: T[] = [];
  private top: number = 0;

  public push(item: T) {
    this.dataStore[this.top++] = item;
  }

  public pop(): T | undefined {
    if (!this.top) {
      return;
    }

    return this.dataStore[--this.top];
  }

  public peek(): T {
    return this.dataStore[this.top - 1];
  }

  public length(): number {
    return this.top;
  }

  public clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.top = 0;
  }
}
import { IOperation } from "../abstract/IOperation";

class MultiplyOperation implements IOperation {
  priority = 3;
  constructor(public left: number, public right: number) {}

  execute(): number {
    return this.left * this.right;
  }
}

export { MultiplyOperation };

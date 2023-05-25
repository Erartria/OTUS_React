import { IOperation } from "../abstract/IOperation";

class PlusOperation implements IOperation {
  priority = 4;

  constructor(public left: number, public right: number) {}

  execute(): number {
    return this.left + this.right;
  }
}

export { PlusOperation };

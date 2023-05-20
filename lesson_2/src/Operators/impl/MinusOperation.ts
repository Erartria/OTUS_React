import { IOperation } from "../abstract/IOperation";

class MinusOperation implements IOperation {
  constructor(public left: number, public right: number) {}

  public get priority(): number {
    return 4;
  }
  execute(): number {
    return this.left - this.right;
  }
}

export { MinusOperation };

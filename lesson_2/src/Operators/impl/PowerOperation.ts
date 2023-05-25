import { IOperation } from "../abstract/IOperation";

class PowerOperation implements IOperation {
  priority = 2;
  constructor(public left: number, public right: number) {}

  execute(): number {
    return Math.pow(this.left, this.right);
  }
}

export { PowerOperation };

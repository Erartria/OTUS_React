import { IsInfinateError } from "../../Exceptions/IsInfinateError";
import { IOperation } from "../abstract/IOperation";

class DivideOperation implements IOperation {
  priority = 3;
  constructor(public left: number, public right: number) {}

  execute(): number {
    const result = this.left / this.right;
    if (!Number.isFinite(result)) {
      throw new IsInfinateError(this.left, this.right);
    }
    return result;
  }
}

export { DivideOperation };

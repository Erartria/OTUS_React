import { IOperation } from "../abstract/IOperation";
import { PowerOperation } from "./PowerOperation";

class SquareOperation extends PowerOperation implements IOperation {
  priority = 2;

  constructor(left: number) {
    super(left, 2);
  }

  execute(): number {
    return super.execute();
  }
}

export { SquareOperation };

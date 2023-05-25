import { Calculator } from "../../Calculator";
import { IOperation } from "../abstract/IOperation";

class BracketOperation implements IOperation {
  priority = 1;
  private calc: Calculator = new Calculator();
  //leftIndex, rightIndex
  constructor(
    public left: number,
    public right: number,
    public stack: (IOperation | number)[]
  ) {}

  execute(): number {
    return this.calc.executeStack(this.stack) as number;
  }
}

export { BracketOperation };

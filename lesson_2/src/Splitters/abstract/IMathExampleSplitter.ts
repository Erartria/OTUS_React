import { IOperation } from "../../Operators/abstract/IOperation";

interface IMathExampleSplitter {
  getStack(): (number | IOperation)[];

  split(mathString: string): (number | IOperation)[];
}

export { IMathExampleSplitter };

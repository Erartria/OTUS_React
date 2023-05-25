import { IOperation } from "./Operators/abstract/IOperation";
import { SquareOperation } from "./Operators/impl/SquareOperation";
import { IMathExampleSplitter } from "./Splitters/abstract/IMathExampleSplitter";
import { MathExampleSplitter } from "./Splitters/impl/MathExampleSplitter";

class Calculator {
  private readonly mathSplitter: IMathExampleSplitter =
    new MathExampleSplitter();

  public execute(inputString: string): number | undefined {
    return this.executeStack(this.split(inputString));
  }

  public split(mathExample: string): (number | IOperation)[] {
    return this.mathSplitter.split(mathExample);
  }

  public executeStack(inputStack: (number | IOperation)[]): number | undefined {
    const _stack = [...inputStack];
    while (_stack.length != 1) {
      const currentPriority = _stack.reduce(
        (maxPriority: number | undefined, current) => {
          if (typeof current != "number") {
            if (!maxPriority) {
              maxPriority = current.priority;
            } else if (maxPriority > current.priority) {
              maxPriority = current.priority;
            }
          }
          return maxPriority;
        },
        undefined
      );
      if (!currentPriority) {
        throw Error(`Smth went wrong. Operators left in stack: ${_stack}`);
      }
      for (let i = 0; i < _stack.length; i++) {
        const current = _stack[i];
        if (typeof current != "number" && current.priority == currentPriority) {
          if (current instanceof SquareOperation) {
            current.left = _stack[i - 1] as number;
            _stack.splice(i - 1, 2);
          } else {
            current.left = _stack[i - 1] as number;
            current.right = _stack[i + 1] as number;
            _stack.splice(i - 1, 3);
          }
          const newValue = current.execute();
          _stack.splice(i - 1, 0, newValue);
        }
      }
    }

    return _stack[0] as number;
  }
}

export { Calculator };

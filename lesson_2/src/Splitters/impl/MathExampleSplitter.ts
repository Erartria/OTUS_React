// import { BracketOpenCloseError } from "../../Exceptions/BracketOpenCloseError";
import { IOperation } from "../../Operators/abstract/IOperation";
import { IOperationFactory } from "../../Operators/abstract/IOperationFactory";
import { BracketOperation } from "../../Operators/impl/BracketOperation";
import {
  EOperatorSymbol,
  OperationFactory,
} from "../../Operators/impl/OperationFactory";
import { SquareOperation } from "../../Operators/impl/SquareOperation";
import { IMathExampleSplitter } from "../abstract/IMathExampleSplitter";

class MathExampleSplitter implements IMathExampleSplitter {
  private _stack: (number | IOperation)[] = [];
  private _operationFactory: IOperationFactory = new OperationFactory();

  public getStack(): (number | IOperation)[] {
    return [...this._stack];
  }

  public split(mathString: string): (number | IOperation)[] {
    const splittedString = mathString.split(" ");
    const bracketStack: BracketOperation[] = [];
    this._stack = splittedString.reduce(
      (result: (IOperation | number)[], current: string, key) => {
        const prev = splittedString[key - 1];

        if (this.checkIsValidNumber(current, prev)) {
          result.push(Number(current));
        } else if (current == EOperatorSymbol.BRACKET_CLOSE) {
          if (bracketStack.length > 0) {
            const bracketOperation = bracketStack.pop() as BracketOperation;

            bracketOperation.right = key;
            const bracketIndex = result.findIndex(
              (el) => el == bracketOperation
            );
            bracketOperation.stack = result.splice(
              bracketIndex + 1,
              bracketOperation.right - bracketOperation.left - 1
            );
            const newValue = bracketOperation.execute();
            result.splice(bracketIndex, 1, newValue);
          } else {
            const msg = `Can't find ${EOperatorSymbol.BRACKET_OPEN} opening bracket symbol for ${EOperatorSymbol.BRACKET_CLOSE} closing bracket at postion ${key}`;
            // throw new BracketOpenCloseError(msg);
            throw new Error(msg);
          }
        } else if (this.checkIsValidOperator(current, prev)) {
          const operation = this._operationFactory.getOperation(current);
          if (operation instanceof BracketOperation) {
            operation.left = key;
            bracketStack.push(operation);
          }
          result.push(operation);
        } else {
          throw new TypeError(
            `Unexpected string. Current: ${current} previous: ${prev}`
          );
        }
        return result;
      },
      []
    );
    this._stack = [...bracketStack, ...this._stack];
    return this._stack;
  }

  private checkIsValidNumber(current: string, previous: string): boolean {
    return (
      !Number.isFinite(Number(previous)) && Number.isFinite(Number(current))
    );
  }

  private checkIsValidOperator(current: string, previous: string): boolean {
    const currentIsCloseBracketAnPrevIsNumber =
      Number.isFinite(Number(previous)) &&
      current == EOperatorSymbol.BRACKET_CLOSE;
    let currentOperation, previousOperation;
    try {
      currentOperation = this._operationFactory.getOperation(current);
    } catch (ex) {
      // console.warn(`currentOperation ${current} is not described`)
    }

    try {
      previousOperation = this._operationFactory.getOperation(previous);
    } catch (ex) {
      // console.warn(`previousOperation ${previous} is not described`)
    }

    return (
      currentIsCloseBracketAnPrevIsNumber ||
      (currentOperation && !!previous && Number.isFinite(Number(previous))) ||
      (!!previousOperation && current == EOperatorSymbol.BRACKET_CLOSE) ||
      (previous == EOperatorSymbol.BRACKET_CLOSE && !!currentOperation) ||
      (previous == EOperatorSymbol.BRACKET_CLOSE &&
        current == EOperatorSymbol.BRACKET_CLOSE) ||
      (!!previousOperation && previousOperation instanceof SquareOperation) ||
      (!!currentOperation && currentOperation instanceof BracketOperation)
    );
  }
}

export { MathExampleSplitter };

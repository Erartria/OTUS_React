import { IOperation } from "../abstract/IOperation";
import { IOperationFactory } from "../abstract/IOperationFactory";
import { BracketOperation } from "./BracketOperation";
import { DivideOperation } from "./DivideOperation";
import { MinusOperation } from "./MinusOperation";
import { MultiplyOperation } from "./MultiplyOperation";
import { PlusOperation } from "./PlusOperation";
import { PowerOperation } from "./PowerOperation";
import { SquareOperation } from "./SquareOperation";

class OperationFactory implements IOperationFactory {
  public getOperation(
    operator: string | EOperatorSymbol,
    left = 0,
    right = 0
  ): IOperation {
    let operatorType: EOperatorSymbol;
    if (typeof operator == "string") {
      const oper = getEnumKeyByEnumValue(EOperatorSymbol, operator);
      if (oper === undefined) {
        throw new Error(`${operator} is not an operator`);
      }
      operatorType = EOperatorSymbol[oper];
    } else {
      operatorType = operator;
    }

    let newOperator: IOperation;
    switch (operatorType) {
      case EOperatorSymbol.PLUS:
        newOperator = new PlusOperation(left, right);
        break;
      case EOperatorSymbol.MINUS:
        newOperator = new MinusOperation(left, right);
        break;
      case EOperatorSymbol.DIVIDE:
        newOperator = new DivideOperation(left, right);
        break;
      case EOperatorSymbol.MULTIPLY:
        newOperator = new MultiplyOperation(left, right);
        break;
      case EOperatorSymbol.POWER:
        newOperator = new PowerOperation(left, right);
        break;
      case EOperatorSymbol.SQUARE:
        newOperator = new SquareOperation(left);
        break;
      case EOperatorSymbol.BRACKET_OPEN:
        newOperator = new BracketOperation(left, right, []);
        break;
      default:
        throw new Error(`Can't find operation for ${operator}`);
        break;
    }
    return newOperator;
  }
}

function getEnumKeyByEnumValue<T extends { [index: string]: string }>(
  myEnum: T,
  enumValue: string
): keyof T | undefined {
  const keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
  return keys.length > 0 ? keys[0] : undefined;
}

enum EOperatorSymbol {
  PLUS = "+",
  MINUS = "-",
  DIVIDE = "/",
  MULTIPLY = "*",
  SQUARE = "**",
  POWER = "^",
  BRACKET_OPEN = "(",
  BRACKET_CLOSE = ")",
}

export { OperationFactory, EOperatorSymbol, getEnumKeyByEnumValue };

import { IOperation } from "../../../src/Operators/abstract/IOperation";
import { DivideOperation } from "../../../src/Operators/impl/DivideOperation";
import { MinusOperation } from "../../../src/Operators/impl/MinusOperation";
import { MultiplyOperation } from "../../../src/Operators/impl/MultiplyOperation";
import {
  EOperatorSymbol,
  OperationFactory,
} from "../../../src/Operators/impl/OperationFactory";
import { PlusOperation } from "../../../src/Operators/impl/PlusOperation";
import { PowerOperation } from "../../../src/Operators/impl/PowerOperation";
import { SquareOperation } from "../../../src/Operators/impl/SquareOperation";

const operatorsMapString: Map<string, IOperation> = new Map([
  ["/", new DivideOperation(0, 0)],
  ["-", new MinusOperation(0, 0)],
  ["*", new MultiplyOperation(0, 0)],
  ["+", new PlusOperation(0, 0)],
  ["^", new PowerOperation(0, 0)],
  ["**", new SquareOperation(0)],
]);

const stringOperators = ["/", "-", "*", "+", "^", "**"];
stringOperators.forEach((stringOperator) => {
  test(`Factory can get ${stringOperator} operation by string value.`, () => {
    const factory = new OperationFactory();
    const expectedOperator = operatorsMapString.get(stringOperator);
    expect(factory.getOperation(stringOperator)).toBeInstanceOf(
      expectedOperator?.constructor
    );
  });
});

const operatorsMap: Map<EOperatorSymbol, IOperation> = new Map([
  [EOperatorSymbol.DIVIDE, new DivideOperation(0, 0)],
  [EOperatorSymbol.MINUS, new MinusOperation(0, 0)],
  [EOperatorSymbol.MULTIPLY, new MultiplyOperation(0, 0)],
  [EOperatorSymbol.PLUS, new PlusOperation(0, 0)],
  [EOperatorSymbol.POWER, new PowerOperation(0, 0)],
  [EOperatorSymbol.SQUARE, new SquareOperation(0)],
]);
const enumOperators: EOperatorSymbol[] = [
  EOperatorSymbol.DIVIDE,
  EOperatorSymbol.MINUS,
  EOperatorSymbol.MULTIPLY,
  EOperatorSymbol.PLUS,
  EOperatorSymbol.POWER,
  EOperatorSymbol.SQUARE,
];
enumOperators.forEach((enumOperator) => {
  test(`Factory can get ${enumOperator} operation by enum value.`, () => {
    const factory = new OperationFactory();
    const expectedOperator = operatorsMap.get(enumOperator);
    expect(factory.getOperation(enumOperator)).toBeInstanceOf(
      expectedOperator?.constructor
    );
  });
});

import { IOperation } from "./IOperation";

interface IOperationFactory {
  getOperation(operator: string, left?: number, right?: number): IOperation;
}

export { IOperationFactory };

import { MultiplyOperation } from "../../../src/Operators/impl/MultiplyOperation";

test("Both are positive numbers. 1 * 2 to equal 2", () => {
  const operation = new MultiplyOperation(1, 2);
  const result = operation.execute();
  expect(result).toEqual(2);
});

test("First is positive number, second is a negative number. 2 * (-1) to equal -2", () => {
  const operation = new MultiplyOperation(2, -1);
  const result = operation.execute();
  expect(result).toEqual(-2);
});

test("First is negative number, second is a positive number. (-2) * 1 to equal -2", () => {
  const operation = new MultiplyOperation(-2, 1);
  const result = operation.execute();
  expect(result).toEqual(-2);
});

test("Both are negative numbers. (-2) * (-1) to equal 2", () => {
  const operation = new MultiplyOperation(-2, -1);
  const result = operation.execute();
  expect(result).toEqual(2);
});

test("One is zero number. 2 * 0 to equal 0", () => {
  const operation = new MultiplyOperation(2, 0);
  const result = operation.execute();
  expect(result).toEqual(0);
});

test("Both are zero numbers. 0 * 0 to equal 0", () => {
  const operation = new MultiplyOperation(0, 0);
  const result = operation.execute();
  expect(result).toEqual(0);
});

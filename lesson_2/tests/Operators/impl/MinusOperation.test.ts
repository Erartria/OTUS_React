import { MinusOperation } from "../../../src/Operators/impl/MinusOperation";

test("Both are positive numbers. 1 - 2 to equal 3", () => {
  const operation = new MinusOperation(1, 2);
  const result = operation.execute();
  expect(result).toEqual(-1);
});

test("First is positive number, second is a negative number. 1 - (-2) to equal 3", () => {
  const operation = new MinusOperation(1, -2);
  const result = operation.execute();
  expect(result).toEqual(3);
});

test("First is negative number, second is a positive number. (-2) - 1 to equal -3", () => {
  const operation = new MinusOperation(-2, 1);
  const result = operation.execute();
  expect(result).toEqual(-3);
});

test("Both are negative numbers. (-2) - (-1) to equal -1", () => {
  const operation = new MinusOperation(-2, -1);
  const result = operation.execute();
  expect(result).toEqual(-1);
});

test("One is zero number. 2 - 0 to equal 2", () => {
  const operation = new MinusOperation(2, 0);
  const result = operation.execute();
  expect(result).toEqual(2);
});

test("Both are zero numbers. 0 - 0 to equal 0", () => {
  const operation = new MinusOperation(0, 0);
  const result = operation.execute();
  expect(result).toEqual(0);
});

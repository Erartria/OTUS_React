import { MultiplyOperation } from "../../../src/Operators/impl/MultiplyOperation";

test("Both are positive numbers. 10 * 5 to equal 50", () => {
  const operation = new MultiplyOperation(10, 5);
  const result = operation.execute();
  expect(result).toEqual(50);
});

test("First is positive number, second is a negative number. 10 * (-5) to equal -50", () => {
  const operation = new MultiplyOperation(10, -5);
  const result = operation.execute();
  expect(result).toEqual(-50);
});

test("First is negative number, second is a positive number. (-10) * 5 to equal -50", () => {
  const operation = new MultiplyOperation(-10, 5);
  const result = operation.execute();
  expect(result).toEqual(-50);
});

test("Both are negative numbers. (-10) * (-2) to equal 20", () => {
  const operation = new MultiplyOperation(-10, -2);
  const result = operation.execute();
  expect(result).toEqual(20);
});

test("First is zero number. 0 * 2 to equal 0", () => {
  const operation = new MultiplyOperation(0, 2);
  const result = operation.execute();
  expect(result).toEqual(0);
});

test("Second is zero number. 10 * 0 is 0", () => {
  const operation = new MultiplyOperation(10, 0);
  const result = operation.execute();
  expect(result).toEqual(0);
});

test("Multiply to zero. 0 * 0 is 0", () => {
  const operation = new MultiplyOperation(0, 0);
  const result = operation.execute();
  expect(result).toEqual(0);
});

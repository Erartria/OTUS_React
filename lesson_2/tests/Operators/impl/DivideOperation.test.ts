import { IsInfinateError } from "../../../src/Exceptions/IsInfinateError";
import { DivideOperation } from "../../../src/Operators/impl/DivideOperation";

test("Both are positive numbers. 10 / 5 to equal 2", () => {
  const operation = new DivideOperation(10, 5);
  const result = operation.execute();
  expect(result).toEqual(2);
});

test("First is positive number, second is a negative number. 10 / (-5) to equal -2", () => {
  const operation = new DivideOperation(10, -5);
  const result = operation.execute();
  expect(result).toEqual(-2);
});

test("First is negative number, second is a positive number. (-10) / 5 to equal -2", () => {
  const operation = new DivideOperation(-10, 5);
  const result = operation.execute();
  expect(result).toEqual(-2);
});

test("Both are negative numbers. (-10) / (-2) to equal 2", () => {
  const operation = new DivideOperation(-2, -1);
  const result = operation.execute();
  expect(result).toEqual(2);
});

test("First is zero number. 0 / 2 to equal 0", () => {
  const operation = new DivideOperation(0, 2);
  const result = operation.execute();
  expect(result).toEqual(0);
});

test("Second is zero number. 10 / 0 throws an infinate error", () => {
  const operation = new DivideOperation(10, 0);
  expect(() => operation.execute()).toThrow(IsInfinateError);
});

test("Dividing to zero. 0 / 0 throws an infinate error", () => {
  const operation = new DivideOperation(0, 0);
  expect(() => operation.execute()).toThrow(IsInfinateError);
});

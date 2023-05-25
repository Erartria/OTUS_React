import { SquareOperation } from "../../../src/Operators/impl/SquareOperation";

test("Square of positive number is positive number. Square(3) to equal 9", () => {
  const operation = new SquareOperation(3);
  const result = operation.execute();
  expect(result).toEqual(9);
});

test("Square of negative number is positive number. Square(-2) to equal 4", () => {
  const operation = new SquareOperation(2);
  const result = operation.execute();
  expect(result).toEqual(4);
});

test("Square of zero is zero. Square(0) to equal 0", () => {
  const operation = new SquareOperation(0);
  const result = operation.execute();
  expect(result).toEqual(0);
});

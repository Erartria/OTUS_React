import { PowerOperation } from "../../../src/Operators/impl/PowerOperation";

test("An even power of a negative number is positive number. Pow(-3, 4) to equal 81", () => {
  const operation = new PowerOperation(-3, 4);
  const result = operation.execute();
  expect(result).toEqual(81);
});

test("An odd power of a negative number is negative number. Pow(-3, 3) to equal -27", () => {
  const operation = new PowerOperation(-3, 3);
  const result = operation.execute();
  expect(result).toEqual(-27);
});

const powers: number[] = [1, 2, 3, 4];
test(`Any power of the number 0 is zero. Pow(0, ${JSON.stringify(
  powers
)}) is always 0`, () => {
  powers.forEach((power) => {
    const operation = new PowerOperation(0, power);
    const result = operation.execute();
    expect(result).toEqual(0);
  });
});

test(`Any power of the number 1 is 1. Pow(0, ${JSON.stringify(
  powers
)}) is always 1`, () => {
  powers.forEach((power) => {
    const operation = new PowerOperation(1, power);
    const result = operation.execute();
    expect(result).toEqual(1);
  });
});

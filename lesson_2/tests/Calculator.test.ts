import { Calculator } from "../src/Calculator";

const calc = new Calculator();

//#region BaseOperations
const baseOperationArgs: [number, number][] = [
  [2, 4],
  [4, 2],
  [10, 2],
  [2, 10],
];
baseOperationArgs.forEach((args) => {
  test(`Divide operation between two numbers ${args[0]}, ${
    args[1]
  } is equal to ${args[0] / args[1]}`, () => {
    const operation = `${args[0]} / ${args[1]}`;
    const result = calc.execute(operation);
    expect(result).toEqual(args[0] / args[1]);
  });
});

baseOperationArgs.forEach((args) => {
  test(`Minus operation between two numbers ${args[0]}, ${
    args[1]
  } is equal to ${args[0] - args[1]}`, () => {
    const operation = `${args[0]} - ${args[1]}`;
    const result = calc.execute(operation);
    expect(result).toEqual(args[0] - args[1]);
  });
});

baseOperationArgs.forEach((args) => {
  test(`Multiply operation between two numbers ${args[0]}, ${
    args[1]
  } is equal to ${args[0] * args[1]}`, () => {
    const operation = `${args[0]} * ${args[1]}`;
    const result = calc.execute(operation);
    expect(result).toEqual(args[0] * args[1]);
  });
});

baseOperationArgs.forEach((args) => {
  test(`Plus operation between two numbers ${args[0]}, ${args[1]} is equal to ${
    args[0] + args[1]
  }`, () => {
    const operation = `${args[0]} + ${args[1]}`;
    const result = calc.execute(operation);
    expect(result).toEqual(args[0] + args[1]);
  });
});

baseOperationArgs.forEach((args) => {
  test(`Power operation between two numbers ${args[0]} ^ ${
    args[1]
  } is equal to ${Math.pow(args[0], args[1])}`, () => {
    const operation = `${args[0]} ^ ${args[1]}`;
    const result = calc.execute(operation);
    expect(result).toEqual(Math.pow(args[0], args[1]));
  });
});

baseOperationArgs.forEach((args) => {
  test(`Square operation for number ${args[0]} is equal to ${Math.pow(
    args[0],
    2
  )}`, () => {
    const operation = `${args[0]} **`;
    const result = calc.execute(operation);
    expect(result).toEqual(Math.pow(args[0], 2));
  });
});
//#endregion

//#with brackets
const mathExamples: [string, number][] = [
  ["10 / ( 3 + 2 )", 2],
  ["100 / ( 10 - ( 3 + 2 ) )", 20],
  ["( 100 + 20 ) / ( 10 - ( 3 + 2 ) )", 24],
  ["( 2 + 3 ) **", 25],
  ["( 2 + 3 ) ^ 3", 125],
  ["284 * 309 + ( 223032 - 45173 ) / 37", 92563],
];
mathExamples.forEach((example) => {
  test(`Value of math example "${example[0]}" is equal to ${example[1]}`, () => {
    const operation = example[0];
    const result = calc.execute(operation);
    expect(result).toEqual(example[1]);
  });
});

mathExamples.forEach((example) => {
  test(`Value of math example "${example[0]}" is equal to ${example[1]}`, () => {
    const operation = example[0];
    const result = calc.execute(operation);
    expect(result).toEqual(example[1]);
  });
});
//#endregion

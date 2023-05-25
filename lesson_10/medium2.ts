import React from "react";
// Задание второго уровня 2
// Есть функция которая достает из реакт компонента (любого, и Functional и Class) его defaultProps
// Нужно заменить FIXME на правильный тип

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME<T> = T extends { defaultProps: infer U } ? U : never;

// type testT = { defaultProps: number };
// const a: FIXME<testT> = 1;
// type testT2 = { a: number };
// const b: FIXME<testT2> = "adasdad";
// type testT3 = { a: number };
// const c: FIXME<testT2> = undefined;
// type testT4 = { a: number };
// const d: FIXME<testT4> = null;
// Hint: infer
export const getDefaultProps = <T>(
  component: React.ComponentType<T>
): FIXME<T> => {
  return component.defaultProps;
};

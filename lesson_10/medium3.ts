const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = (typeof orderStates)[number];

// Hint: type guards
// const typeVerify = (a : any): a is FIXME => {
//   //verify a > 0 a < 0... and other
//   return true;
// }
type FIXME = Exclude<OrderState, "buyingSupplies" | "producing">;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fixmeGuard = (a: any): a is FIXME => {
  if (a === "buyingSupplies") {
    return false;
  }
  if (a === "producing") {
    return false;
  }
  return true;
};
export const getUserOrderStates = (orderStates: OrderState[]): FIXME[] =>
  orderStates.filter(fixmeGuard);

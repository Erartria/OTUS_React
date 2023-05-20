interface IOperation {
  priority: number;
  left: number;
  right: number;
  execute(): number;
}

export { IOperation };

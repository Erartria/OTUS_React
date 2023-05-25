class IsInfinateError extends Error {
  constructor(left: number, right: number) {
    const msg = `${left} / ${right}. Result is infinate!`;
    super(msg);
    this.name = this.constructor.name;
    // // Set the prototype explicitly.
    // Object.setPrototypeOf(this, IsInfinateError.prototype);
  }
}

export { IsInfinateError };

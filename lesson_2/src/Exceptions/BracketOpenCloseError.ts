class BracketOpenCloseError extends Error {
  constructor(msg: string) {
    super(msg);
    this.name = this.constructor.name;
    // Set the prototype explicitly.
    // Object.setPrototypeOf(this, BracketOpenCloseError.prototype);
  }
}

export { BracketOpenCloseError };

class APIErrors extends Error {
  constructor(statusCode, errors = [], message = "error", stack = "") {
    super(message);
    this.errors = errors;
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { APIErrors };

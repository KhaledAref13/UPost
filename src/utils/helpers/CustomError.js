class CustomError extends Error {
  status;
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
    this.name = 'Custom Error';
  }
}

export default CustomError;

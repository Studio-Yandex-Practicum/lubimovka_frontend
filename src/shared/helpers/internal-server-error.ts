export class InternalServerError extends Error {
  constructor(message = 'Server unavailable or responded with an error') {
    super(message);
    this.name = 'Internal server error';
  }
};

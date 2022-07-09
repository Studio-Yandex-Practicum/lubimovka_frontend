export class InternalServerError extends Error {
  constructor(message = 'Server responded with an error') {
    super(message);
    this.name = 'Internal server error';
  }
};

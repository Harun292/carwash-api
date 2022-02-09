export class HttpError extends Error {
    constructor(status, message, type = 'UNKNOWN_ERROR', data = {}) {
      super();
      this.status = status;
      this.message = message;
      this.type = type;
      this.data = data;
    }
  }
  
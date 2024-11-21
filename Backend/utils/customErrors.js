class NotFoundError extends Error {
    constructor(message) {
    super(message);
    this.name = "NotFoundError";
      this.status = 404; // Código de estado HTTP para "Not Found"
    }
}

class ValidationError extends Error {
    constructor(message) {
    super(message);
    this.name = "ValidationError";
      this.status = 400; // Código de estado HTTP para "Bad Request"
    }
}

class InternalServerError extends Error {
    constructor(message) {
    super(message);
    this.name = "InternalServerError";
      this.status = 500; // Código de estado HTTP para "Internal Server Error"
    }
}

export { NotFoundError, ValidationError, InternalServerError };

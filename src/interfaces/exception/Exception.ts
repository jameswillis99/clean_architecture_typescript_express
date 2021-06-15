
export enum StatusCode {
    NotFound = 404,
    UnAuthorised = 401
}


export class Exception extends Error {
    statusCode: StatusCode;
    constructor(statusCode: StatusCode, message: string) {
        super();
        this.message = message;
        this.statusCode = statusCode
      }
}


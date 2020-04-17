import { ErrorHandler } from "@angular/core";
import { HttpError } from "../errors/HttpError";

export class HttpErrorHandler implements ErrorHandler {
  handleError(error: HttpError): void {
    console.log(error.error);
    alert(error.message);
  }
}

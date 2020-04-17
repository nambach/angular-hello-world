import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from 'rxjs';
import { HttpError } from "../common/errors/HttpError";
import { NotFoundError } from "../common/errors/NotFoundError";
import { BadRequestError } from "../common/errors/BadRequestError";

export class DataService {

  constructor(protected url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource) {
    return this.http
      .put(this.url + "/" + resource.id, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http
      .delete(this.url + "/" + id)
      .pipe(catchError(this.handleError));
  }

  handleError(error: Response) {
    if (error.status === 400) {
      return throwError(new BadRequestError(error, "Bad request."));
    }
    if (error.status === 404) {
      return throwError(new NotFoundError(error, "Data not found."));
    }
    return throwError(new HttpError(error, "Unexpected error occurs."));
  }
}

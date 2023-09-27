import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            // Auth Hatası
          }
          if (error.status == 400 || error.error == 'BusinessException') {
          }
          if (error.status == 400 || error.error == 'ValidationException') {
          }
        }
        throw error;
      })
    );
  }
}

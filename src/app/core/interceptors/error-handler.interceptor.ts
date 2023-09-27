import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastrService: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse) => {
        if (errorResponse instanceof HttpErrorResponse) {
          if (errorResponse.status == 401) {
            this.toastrService.error(
              'Bu sayfaya erişmek için giriş yapmanız gerekmektedir.'
            );
            this.router.navigateByUrl('/login');
          }
          switch (errorResponse.error.errorType) {
            case 'BusinessException':
              break;
            case 'ValidationException':
              break;
            default:
              this.toastrService.error('Bilinmedik hata');
              break;
          }
        }
        throw errorResponse;
      })
    );
  }
}
// 10.00

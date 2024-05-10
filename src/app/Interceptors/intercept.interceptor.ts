import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export const interceptInterceptor: HttpInterceptorFn = (req, next) => {
  let errorMessage = {
    errorMessage: 'unknown error occured',
    status: 999,
  };
  return next(req).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        errorMessage.errorMessage=err.error.message,
        errorMessage.status=err.status
      }
      if(err.status!==0){
        errorMessage.errorMessage=err.error.message
        errorMessage.status=err.status
       }
      return throwError(() => {
        alert(`you have error: ${errorMessage.errorMessage}`);
      });
    })
  );
};

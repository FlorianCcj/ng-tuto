import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HeaderHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({headers: req.headers.set('auth', 'ah que coucou bob je suis un tokken d authentification')});

    return next.handle(authReq)
      .catch((error, caught) => {
        console.log('HeaderHttpInterceptor - Error Occured');
        console.log(error);
        return Observable.throw(error);
      }) as any;
  }
}

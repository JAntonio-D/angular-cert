import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { filter, map, switchMap } from 'rxjs/operators';
import { CacheResponse, LeagueResponse, StandingResponse } from '../interfaces/public-api';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { 
    const req = request.clone({
      setHeaders: {
        'x-rapidapi-key': environment.config.security.apiKey
      }
    })
    return next.handle(req)
  }
}

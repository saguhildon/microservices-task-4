import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { RequestOptions, ResponseContentType } from '@angular/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { catchError, map, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DashboardService {
  baseAPI: string = "http://localhost:5000/api";
 
  constructor(private http: HttpClient) { }
  GetBookingDetails(): Observable<any> {
    return this.http.get<any>(this.baseAPI + '/Books');
  }
  
  GetBookingDetails1(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}

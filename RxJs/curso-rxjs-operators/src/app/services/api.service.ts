import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concat, forkJoin, interval, map, merge, Observable, share, shareReplay, toArray, zip } from 'rxjs';
import * as internal from 'stream';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsersForkJoin(): Observable<any>{
    const http$ = forkJoin({
      apiLocal: this.http.get('http://localhost:3000/users'),
      apiExterna: this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    });

    return http$;
  }

  getUsersZip(): Observable<any> {
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

    const result$ = zip(apiLocal$, apiExterna$);

    return result$;
  }

  getUsersMerge(): Observable<any> {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

    const result$ = merge(it$, apiLocal$, apiExterna$);

    return result$;
  }

  getUsersConcat(): Observable<any> {
    const it$ = interval(1000);
    const apiLocal$ = this.http.get('http://localhost:3000/users');
    const apiExterna$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

    const result$ = concat(it$, apiLocal$, apiExterna$);

    return result$;
  }

  getUserSwitchMap(): Observable<any> {
    return this.http.get('http://localhost:3000/user');
  }

  getUserSwitchMapSearch(cpf: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?cpf=${cpf}`);
  }

  getUsersHttp(): Observable<any> {
    const apiLocal$ = this.http.get('http://localhost:3000/users')
    .pipe(map((data: any, index) => data[index].name));
    return apiLocal$
  }

  getUserToArray(): Observable<any> {
    return this.http.get('http://localhost:3000/user')
    .pipe(
      toArray()
    )
  }

  getUsersDebouceTime(name: string) {
    return this.http.get(`http://localhost:3000/users?name=${name}`);
  }
 
  getUserShareReplay() {
    return this.http.get(`http://localhost:3000/users`).pipe(shareReplay(1));
  }

  getUserShare() {
    return this.http.get(`http://localhost:3000/users`).pipe(share());
  }
}

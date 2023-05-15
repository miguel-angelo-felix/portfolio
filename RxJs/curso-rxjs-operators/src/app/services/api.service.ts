import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, concat, delay, forkJoin, interval, map, merge, Observable, of, retry, share, shareReplay, throwError, timeout, toArray, zip } from 'rxjs';


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

  getUserCatchError() {
    return this.http.get(`http://localhost:3000/us`).pipe(
      catchError(error => {
        if (error.status === 0 && error.status != 404) {
          return of('Ocorreu um erro na aplicação, tente mais tarde')
        } else if (error.status === 404) {
          console.log(error.message)
        } else {
          console.log('tente mais tarde')
        }
        return throwError(() => error)
      }),
      retry(2)
    );
  }

  getUserDelay() {
    return this.http.get(`http://localhost:3000/users`).pipe(delay(5000));
  }

  getUserTimeOut() {
    return this.http.get(`http://localhost:3000/users`)
      .pipe(
        delay(5000),
        timeout(2500),
        catchError((error) => of('O correu um erro: ', error.message))
      );
  }
}

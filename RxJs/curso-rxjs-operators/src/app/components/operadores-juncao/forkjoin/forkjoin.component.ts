import { ApiService } from './../../../services/api.service';
import { ajax } from 'rxjs/ajax';
import { Component, OnInit } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  operatorForkJoin() {
    const http$ = forkJoin({
      apiLocal: ajax.getJSON('http://localhost:3000/users'),
      apiExterna: ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1')
    })

    const httpMult$ = forkJoin({
      first: of(1, 2, 3),
      second: timer(1000)
    });

    http$.subscribe(res => {console.log(res)})
    httpMult$.subscribe(res => {console.log(res)})
  }

  getUsers(){
    this.apiService.getUsersForkJoin().subscribe(res => console.log(res));
  }
}

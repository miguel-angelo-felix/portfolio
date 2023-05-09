import { Component, OnInit } from '@angular/core';
import { filter, from, interval } from 'rxjs';
import * as internal from 'stream';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorFilter();
  }

  operatorFilter(){
    const arr = from([
      {name: 'Danilo', age: 13},
      {name: 'Amanda', age: 18},
      {name: 'Leticia', age: 45}
    ]);

    const it$ = interval(1000);
    const names = arr.pipe(filter(value => value.age > 18)).subscribe(console.log);

    const numberGreaterThan5 = it$.pipe(filter(value => value >= 5));
    numberGreaterThan5.subscribe(console.log);
  }

}

import { Component, OnInit } from '@angular/core';
import { from, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorTake();
  }

  operatorTake() {
    const arr = from([
      {name: 'Danilo', age: 13},
      {name: 'Amanda', age: 18},
      {name: 'Leticia', age: 45}
    ]);

    const names = arr.pipe(
      map( data => data.name),
      take(1)
    ).subscribe(console.log)

    const it$ = interval(1000);
    const first5Values = it$.pipe(take(5)).subscribe(console.log)
  }
}

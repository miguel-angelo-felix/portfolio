import { Component, OnInit } from '@angular/core';
import { filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorTap();
  }

  operatorTap() {
    const arr = of([
      {id: 1, name: 'Miguel', age: 26},
      {id: 2, name: 'Angelo', age: 16},
    ])
  
    const sub = arr.pipe(
      tap(value => console.log('antes do map ', value)),
      map((valueMap: any) => valueMap.filter((valueFilter: any) => valueFilter.name === 'Miguel')),
      tap(value => console.log('depois do map ', value))
    ).subscribe()

  }
}

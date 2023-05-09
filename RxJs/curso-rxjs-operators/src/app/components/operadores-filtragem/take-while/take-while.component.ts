import { Component, OnInit } from '@angular/core';
import { interval, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss']
})
export class TakeWhileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorTakeWhile();
  }

  operatorTakeWhile() {
    const it$ = interval(1000).pipe(
      takeWhile(value => value <= 5)
    ).subscribe(console.log);
  }
}

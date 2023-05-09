import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorTakeUntil();
  }

  operatorTakeUntil() {

    const it$ = interval(1000);
    const it2$ = interval(1000);
    const timer$ = timer(5000);
    const click$ = fromEvent(document, 'click');

    const sub = it$.pipe(takeUntil(timer$)).subscribe(console.log);
    const sub2 = it2$.pipe(takeUntil(click$)).subscribe(console.log);

  }

}

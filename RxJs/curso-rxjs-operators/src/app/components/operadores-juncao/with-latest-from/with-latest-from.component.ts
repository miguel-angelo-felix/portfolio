import { Component, OnInit } from '@angular/core';
import { withLatestFrom, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorWithLatestFrom()
  }

  operatorWithLatestFrom() {
    const clicks = fromEvent(document, 'click');
    const timer$ = interval(1000);
    const result = clicks.pipe(withLatestFrom(timer$)).subscribe(console.log)
  }
}

import { Component, OnInit } from '@angular/core';
import { concatMap, of, pipe, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorTimer();
  }

  operatorTimer() {
    const values = of(1,2,3);

    timer(2000)
      .pipe(
        concatMap( () => values)
      ).subscribe(res => console.log(res))

  }
}

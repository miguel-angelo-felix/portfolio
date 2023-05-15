import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { delayWhen, interval, map, retryWhen, tap, timer } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.operatorRetryWhen();
  }

  operatorRetryWhen() {
    const it$ = interval(1000);
    const sub = it$.pipe(
      map(val => {
        if (val > 5) {
          throw val
        }
        return val;
      }),
      retryWhen(error => (
        error.pipe(
          tap(val => console.log(`Value ${val}`)),
          delayWhen(val => timer(val * 1000))
        )
      ))
    )

    sub.subscribe(console.log)
    
    //this.api.getUserCatchError().subscribe(console.log)
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initSubscription();
  }


  initObservable() {
    const observable = new Observable( (subscribe) => {
      subscribe.next(10);
      subscribe.next('Miguel');
      subscribe.next(true);
      subscribe.next({name: 'Miguel'});
      subscribe.complete();
    });
    
    observable.subscribe(res => {
      console.log('res', res)
    }, 
    (error) => {
      console.log('error', error)
    },
    ()=> {
      console.log('Completou o observable')
    });
  }

  initObserver() {
    const observable = new Observable( (subscribe) => {
      subscribe.next(10);
      subscribe.next('Miguel');
      subscribe.next(true);
      subscribe.next({name: 'Miguel'});
      subscribe.complete();
    });

    const observer = {
      next: (x: any) => console.log('Observer next value: ', x),
      error: (err: any) => console.log('Observer error: ', err),
      complete: () => console.log('Observer complete')
    }
    
    observable.subscribe(observer);
  }

  initSubscription() {
    const observable = new Observable( (subscribe) => {
      subscribe.next(10);
      subscribe.next('Miguel');
      subscribe.next(true);
      subscribe.next({name: 'Miguel'});
      subscribe.complete();
    });

    const it = interval(1000)
    const observer = {
      next: (x: any) => console.log('Observer next value: ', x),
      error: (err: any) => console.log('Observer error: ', err),
      complete: () => console.log('Observer complete')
    }
    
    const subscription = observable.subscribe(observer);
    const subscription2 = it.subscribe(console.log);

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 3000)
    subscription.unsubscribe();
  }

  


}

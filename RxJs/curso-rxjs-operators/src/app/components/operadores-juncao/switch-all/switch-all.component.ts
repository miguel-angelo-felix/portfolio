import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, map, switchAll, tap } from 'rxjs';

@Component({
  selector: 'app-switch-all',
  templateUrl: './switch-all.component.html',
  styleUrls: ['./switch-all.component.scss']
})
export class SwitchAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorSwitchAll();
  }

  operatorSwitchAll() {
    const click = fromEvent(document, 'click')
      .pipe(
        tap(() => console.log('cliquei'))
      )

    const source = click.pipe(
      map(()=> interval(1000))
    ).pipe(
      switchAll()
    ).subscribe(console.log)
  }
}

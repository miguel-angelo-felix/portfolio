import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorOf();
  }

  operatorOf() {
    const arr = of([1,2,3]);
    const multValue = of({name: 'Miguel'}, true, function showName() {return 'Miguel'});

    arr.subscribe(res => console.log(res));
    multValue.subscribe(res => console.log(res));
  }
}

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorFrom();
  }

  operatorFrom() {
    const arr = from([1, 2, 3, 4, 5]);
    const promise = from(new Promise(resolve => resolve('Olá mundo!')));

    arr.subscribe(res => console.log(res));
    promise.subscribe(res => console.log(res));
  }

}

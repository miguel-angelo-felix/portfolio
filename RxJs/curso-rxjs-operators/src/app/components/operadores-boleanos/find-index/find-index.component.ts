import { Component, OnInit } from '@angular/core';
import { findIndex, of } from 'rxjs';

@Component({
  selector: 'app-find-index',
  templateUrl: './find-index.component.html',
  styleUrls: ['./find-index.component.scss']
})
export class FindIndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorFindIndex();
  }

  operatorFindIndex() {
    const names = of('Danilo', 'Leticia', 'Miguel')
    const findName = names.pipe(
      findIndex(val => val === 'Miguel')
    ).subscribe(console.log)
  }

}

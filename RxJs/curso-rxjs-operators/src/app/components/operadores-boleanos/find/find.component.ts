import { Component, OnInit } from '@angular/core';
import { find, of } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorFind();
  }

  operatorFind() {
    const names = of('Danilo', 'Leticia', 'Miguel')
    const findName = names.pipe(
      find(val => val === 'Miguel')
    ).subscribe(console.log)
  }
}

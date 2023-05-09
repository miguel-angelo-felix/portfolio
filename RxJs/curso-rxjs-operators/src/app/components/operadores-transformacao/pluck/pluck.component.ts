import { Component, OnInit } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorPluck();
  }

  operatorPluck() {
    const arr = from([
      {name: 'Miguel', age: 26},
      {name: 'Angelo', age: 15},
      {name: 'Felix', age: 18},
      {name: 'Ana', age: 40, job: {title: 'Developer', language: 'JS'}}
    ]);

    const names = arr.pipe(
      pluck('job', 'title')
    )

    names.subscribe(console.log)
  }

}

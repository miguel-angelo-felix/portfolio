import { Component, OnInit } from '@angular/core';
import { EMPTY, Subject, isEmpty } from 'rxjs';

@Component({
  selector: 'app-is-empty',
  templateUrl: './is-empty.component.html',
  styleUrls: ['./is-empty.component.scss']
})
export class IsEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorIsEmpty();
  }

  operatorIsEmpty() {
    const subject = new Subject<string>();
    const result = EMPTY.pipe(isEmpty()).subscribe(console.log)
    subject.subscribe(console.log)
    subject.next('Miguel')
  }
}

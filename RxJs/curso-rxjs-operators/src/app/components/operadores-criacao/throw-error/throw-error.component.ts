import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorThrowError();
  }

  operatorThrowError() {
    const err = throwError("Sou o Error!")

    err.subscribe(res => {
      console.log(res)
    },
    (error) => {
      console.log('Error: ', error);
    },
    () => console.log('Completou'));
    
  }

}

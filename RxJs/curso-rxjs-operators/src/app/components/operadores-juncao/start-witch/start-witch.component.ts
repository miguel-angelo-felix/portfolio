import { Component, OnInit } from '@angular/core';
import { of, startWith, pipe } from 'rxjs';

@Component({
  selector: 'app-start-witch',
  templateUrl: './start-witch.component.html',
  styleUrls: ['./start-witch.component.scss']
})
export class StartWitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.operatorStartWith();
  }

  operatorStartWith() {
    const values = of(1,2,3);
    const message = of('world', 'GoodBye');

    const numbers = values.pipe(startWith(0)).subscribe(console.log);
    const messageWelcome = message.pipe(startWith('hello')).subscribe(console.log);
    
  }
}

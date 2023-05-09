import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {

  @ViewChild('myBtn') myBtn!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.operatorFromEvent();
  }

  operatorFromEvent() {
    const el = fromEvent(this.myBtn.nativeElement, 'click');

    el.subscribe(res => console.log(res))
  }
}

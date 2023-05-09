import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, skip, tap } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit, AfterViewInit {

  @ViewChild('myButton') myButton!: ElementRef;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    this.operatorSkip();
  }

  operatorSkip() {
    fromEvent(this.myButton.nativeElement, 'click')
      .pipe(
        skip(4),
        tap(() => console.log('Cliquei no botão!'))
      ).subscribe();


    const it$ = interval(1000)
      .pipe(
        skip(10)
      ).subscribe(console.log);


  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit, AfterViewInit {

  @ViewChild('myButton') myButton!: ElementRef;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    this.operatorInterval();
  }

  operatorInterval() {
    fromEvent(document, 'click')
      .pipe(
        switchMap(() => interval(1000))
      ).subscribe(console.log)
  }

  operatorSwitchMap() {
    fromEvent(this.myButton.nativeElement, 'click').pipe(
      switchMap(() => this.api.getUserSwitchMap())
    ).pipe(
      map((data: any) => data.cpf),
      switchMap(cpf =>this.api.getUserSwitchMapSearch(cpf))
    ).subscribe(console.log)
  }
}

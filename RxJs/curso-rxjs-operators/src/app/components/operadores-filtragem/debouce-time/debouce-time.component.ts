import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-debouce-time',
  templateUrl: './debouce-time.component.html',
  styleUrls: ['./debouce-time.component.scss']
})
export class DebouceTimeComponent implements OnInit, AfterViewInit  {

  @ViewChild('inputSearch') inputSearch!: ElementRef;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.operatorDebouceTime();
  }

  operatorDebouceTime() {
    fromEvent(this.inputSearch.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map((event: any) => event.target.value),
        switchMap((value: any) => this.api.getUsersDebouceTime(value))
      ).subscribe(console.log);
  }
}

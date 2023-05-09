import { Component, OnInit } from '@angular/core';
import { from, map, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.operatorMap();
  }

  operatorMap() {
    const arr$ = from([
      {age: 26, name: "Miguel"},
      {age: 15, name: "Felix"}
    ]);

    const nums$ = from([1,2,3,4])
    const numsMap$ = nums$.pipe(map(val => val * 2))
    numsMap$.subscribe(console.log)

    const arrMap = arr$.pipe(
      map(({name}) => name)
    )

    arrMap.subscribe(console.log)

    this.apiService.getUsersHttp().subscribe(console.log);
    
  }

  

}

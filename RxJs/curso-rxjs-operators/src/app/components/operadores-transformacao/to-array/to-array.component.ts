import { Component, OnInit } from '@angular/core';
import { of, toArray } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.operatorToArray();
  }

  operatorToArray() {
    const obj = of({name: 'Miguel', age: 26});
    const arr = obj.pipe(toArray()).subscribe(console.log)
    this.api.getUserToArray().subscribe(console.log);
  }
}

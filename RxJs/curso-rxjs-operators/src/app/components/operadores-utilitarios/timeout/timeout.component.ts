import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.operatorTimeOut();
  }

  operatorTimeOut() {
    this.api.getUserTimeOut().subscribe(console.log);
  }
}

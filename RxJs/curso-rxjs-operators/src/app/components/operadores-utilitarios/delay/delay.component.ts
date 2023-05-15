import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delay',
  templateUrl: './delay.component.html',
  styleUrls: ['./delay.component.scss']
})
export class DelayComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.operatorDelay()
  }

  operatorDelay() {
    this.api.getUserDelay().subscribe(console.log);
  }
}

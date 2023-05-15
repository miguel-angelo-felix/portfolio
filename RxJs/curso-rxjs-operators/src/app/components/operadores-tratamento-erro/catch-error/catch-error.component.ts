import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.operatorCatchError();
  }

  operatorCatchError() {
    this.api.getUserCatchError().subscribe(console.log)
  }

}

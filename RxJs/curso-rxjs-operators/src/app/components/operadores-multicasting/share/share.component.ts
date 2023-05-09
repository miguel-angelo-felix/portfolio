import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.operatorShare();
  }

  operatorShare() {
    const obsUser$ = this.api.getUserShare();
    const nameMiguel$ = obsUser$.pipe(
      map( (data:any) => data.filter((value: any) => value.name === 'Miguel'))
    )
    const nameFelix$ = obsUser$.pipe(
      map( (data:any) => data.filter((value: any) => value.name === 'Felix'))
    )
    const nameLuciana$ = obsUser$.pipe(
      map( (data:any) => data.filter((value: any) => value.name === 'Luciana'))
    )


    obsUser$.subscribe(console.log);
    nameMiguel$.subscribe(console.log);
    nameFelix$.subscribe(console.log);
    nameLuciana$.subscribe(console.log);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map, pipe, filter } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.operatorShareReplay();
  }

  operatorShareReplay() {
    const obsUser$ = this.api.getUserShareReplay();
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

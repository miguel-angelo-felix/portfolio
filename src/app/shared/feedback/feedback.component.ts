import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @Input('mensagem') mensagem: string = '';
  
  @Output('clique') clique: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  metodoClique(){
    this.clique.emit();
  }
  
}

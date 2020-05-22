import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('nome') nome: string = '';
  @Input('css') classeCss: string = '';
  @Output('clique') clique: EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  metodoClique(){
    this.clique.emit();
  }

}

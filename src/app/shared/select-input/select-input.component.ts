import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {

  @Input('nome') nome: string = '';
  @Input('lista') lista: any[] = [];
  @Input('valorInicial') valorInicial: any;
  
  @Output('valorRetorno') valorRetorno: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  retornarValor(){
    this.valorRetorno.emit(this.valorInicial);
  }
  
}

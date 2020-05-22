import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input('nome') nome: string = '';
  @Input('tipo') tipo: string = 'text';
  @Input('valorInicial') valorInicial: string = '';
  
  @Output('valorRetorno') valorRetorno: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  retornarValor(){
    this.valorRetorno.emit(this.valorInicial);
  }

}

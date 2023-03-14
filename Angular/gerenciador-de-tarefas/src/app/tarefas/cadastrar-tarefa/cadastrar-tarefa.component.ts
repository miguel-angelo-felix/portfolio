import { TarefaService } from './../shared/tarefa.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tarefa } from '../shared/tarefa.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.scss']
})
export class CadastrarTarefaComponent {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ){}

  ngOnInit(){
    this.tarefa = new Tarefa();
  }

  cadastrar(): void{
    if (this.formTarefa.form.valid) {
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }
}

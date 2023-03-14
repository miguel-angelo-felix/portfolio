import { Component } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';
import { TarefaService } from '../shared/tarefa.service';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss']
})
export class ListarTarefaComponent {
 
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService){}

  ngOnInit(){
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

 /*  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();

    if (confirm('Deseja remover a tarefa "${tarefa.nome}" ')){

    }
  } */

}

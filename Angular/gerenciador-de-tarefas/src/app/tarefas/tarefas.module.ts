import { TarefaService } from './shared/tarefa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }

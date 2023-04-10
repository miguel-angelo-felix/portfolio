import { EditarTarefaComponent } from './tarefas/editar-tarefa/editar-tarefa.component';
import { CadastrarTarefaComponent } from './tarefas/cadastrar-tarefa/cadastrar-tarefa.component';
import { ListarTarefaComponent } from './tarefas/listar-tarefa/listar-tarefa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tarefas/listar',
    pathMatch: 'full'
  },
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

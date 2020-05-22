import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Cliente
import { ClienteComponent } from './cliente/cliente.component';
import { ManterClienteComponent } from './cliente/manter-cliente/manter-cliente.component';

// Produto
import { ProdutoComponent } from './produto/produto.component';
import { ManterProdutoComponent } from './produto/manter-produto/manter-produto.component';

// Vendas
import { VendasComponent } from './vendas/vendas.component';
import { ManterVendasComponent } from './vendas/manter-vendas/manter-vendas.component';


const routes: Routes = [

  // Rotas Cliente
  {
    path: '',
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/incluir',
    component: ManterClienteComponent,
    pathMatch: 'full'
  },
  {
    path: 'cliente/alterar/:nome',
    component:ManterClienteComponent,
    pathMatch: 'full'
  },

  // Rotas Produto
  {
    path: 'produto',
    component: ProdutoComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/incluir',
    component: ManterProdutoComponent,
    pathMatch: 'full'
  },
  {
    path: 'produto/alterar/:nome',
    component:ManterProdutoComponent,
    pathMatch: 'full'
  },

  // Rotas Vendas
  {
    path: 'venda',
    component: VendasComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda/incluir',
    component: ManterVendasComponent,
    pathMatch: 'full'
  },
  {
    path: 'venda/alterar/:nome',
    component:ManterVendasComponent,
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

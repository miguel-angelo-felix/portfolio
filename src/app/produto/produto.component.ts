import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Feedback } from '../shared/feedback/service/feedback';
import { Produto } from './service/produto';

// Services
import { ProdutoServicoService } from './service/produto-servico.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  // Variáveis Fixas Componente
  valorPesquisar: string = '';
  selecionado: Produto;
  statusFeedback: boolean = false;
  feedback: Feedback;
  returnFeedback: string = '';

  // Variáveis Relativas
  listaProduto: Produto[] = [];

  constructor(
    private router: Router,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit(): void {
  }

  // Router: Métodos de redirecionamentos
  incluir(){
    this.router.navigate(['/produto/incluir']);
  }

  alterar(){
    this.router.navigate(['/produto/alterar/'+this.selecionado.nome]);
  }

  // Método Padrão: seleciona uma linha da tabela e pega as informações...
  selecionar(produto){
    this.selecionado = produto;
  }

  excluir(){
    this.produtoServicoService.remover(this.selecionado).subscribe(
      (data: Feedback) => {
        this.returnFeedback = data.mensagem;
        this.statusFeedback = true;
      }
    );
  }

  pesquisar(){
    this.produtoServicoService.pesquisar(this.valorPesquisar).subscribe(
      (data: Produto[]) => {
        this.listaProduto = data;
      }
    );
  }

  // Fecha o componente de mensagem
  fecharMensagem(){
    this.statusFeedback = false;
  }
  
}

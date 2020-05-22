import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Models
import { Feedback } from './../../shared/feedback/service/feedback';
import { Produto } from './../service/produto';

// Service
import { ProdutoServicoService } from './../service/produto-servico.service';

@Component({
  selector: 'app-manter-produto',
  templateUrl: './manter-produto.component.html',
  styleUrls: ['./manter-produto.component.scss']
})
export class ManterProdutoComponent implements OnInit {

  // Variáveis Fixas Component
  operacao: String = 'Incluir';
  statusFeedback: boolean = false;
  feedback: Feedback;
  returnFeedback: string = '';

  // Variáveis Relativas
  produto: Produto = new Produto();

  constructor(
    private produtoServicoService: ProdutoServicoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.receberProduto(this.activatedRoute.snapshot.params.nome);
  }

  incluir(){
    this.produtoServicoService.incluir(this.produto).subscribe(
      (data: Feedback) => {
        this.returnFeedback = data.mensagem;
        this.statusFeedback = true;
        this.produto = new Produto();
      }
    );
  }

  alterar(){
    this.produtoServicoService.alterar(this.produto).subscribe(
      (data: Feedback) => {
        this.returnFeedback = data.mensagem;
        this.statusFeedback = true;
      }
    );
  }

  voltar(){
    this.router.navigate(['/produto']);
  }

  receberProduto(nome){
    if(nome != null){
      this.operacao = 'Alterar';
      this.produtoServicoService.pesquisar(nome).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }
  }

  // Fecha o componente de mensagem
  fecharMensagem(){

    if( this.operacao != 'Alterar'){
      this.statusFeedback = false;

    }else{
      this.statusFeedback = false;
      this.router.navigate(['/produto']);

    }
  }

}

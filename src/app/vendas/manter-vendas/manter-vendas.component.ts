import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Models
import { Feedback } from 'src/app/shared/feedback/service/feedback';
import { Venda } from '../service/venda';
import { Cliente } from './../../cliente/service/cliente';
import { VendaItens } from '../service/vendaitens';
import { Produto } from 'src/app/produto/service/produto';

// Services
import { ProdutoServicoService } from './../../produto/service/produto-servico.service';
import { ClienteServicoService } from 'src/app/cliente/service/cliente-servico.service';
import { VendaServicoService } from '../service/venda-servico.service';


@Component({
  selector: 'app-manter-vendas',
  templateUrl: './manter-vendas.component.html',
  styleUrls: ['./manter-vendas.component.scss']
})
export class ManterVendasComponent implements OnInit {

  // Variáveis Fixas Component
  operacao: String = 'Incluir';
  statusFeedback: boolean = false;
  feedback: Feedback;
  returnFeedback: string = '';

  // Variáveis Relativas
  venda: Venda = new Venda();
  vendaItens: VendaItens = new VendaItens();

  listaClientes: Cliente[] = [];
  listaProdutos: Produto[] = [];
  
  constructor(
    private produtoService: ProdutoServicoService,
    private clienteService: ClienteServicoService,
    private vendaService: VendaServicoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarClienteSelect();
    this.carregarProdutosSelect();
    this.receberVenda(this.activatedRoute.snapshot.params.nome);
  }

  incluir(){
    this.vendaService.incluir(this.venda).subscribe(
      (data: Feedback) =>{
        this.returnFeedback = data.mensagem;
        this.statusFeedback = true;
        this.venda = new Venda();
      }
    );
  }

  alterar(){}

  voltar(){
    this.router.navigate(['/venda']);
  }

  adicionarProduto(){
    this.venda.listaVentaItem.push(this.vendaItens);
    this.vendaItens = new VendaItens();
  }

  removerProduto(vendaItens){
    this.venda.listaVentaItem = this.venda.listaVentaItem.filter(
      obj => obj !== vendaItens
    );
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

  carregarClienteSelect(){
    this.clienteService.pesquisar('').subscribe(
      data => {
        this.listaClientes = <Cliente[]>data;
      }
    );
  }

  carregarProdutosSelect(){
    this.produtoService.pesquisar('').subscribe(
      (data: Produto[]) => {
        this.listaProdutos = data;
      }
    );
  }

  receberVenda(id){
    if(id != null){
      this.operacao = 'Alterar';
      this.vendaService.pesquisar(id).subscribe(
        data => {
          this.venda = (<Venda[]>data)[0];
        }
      );
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Feedback } from '../shared/feedback/service/feedback';
import { Cliente } from '../cliente/service/cliente';
import { Venda } from './service/venda';

// Services
import { ClienteServicoService } from './../cliente/service/cliente-servico.service';
import { VendaServicoService } from './service/venda-servico.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  // Variáveis Fixas Componente
  valorPesquisar: string = '';
  selecionado: Venda;
  statusFeedback: boolean = false;
  feedback: Feedback;
  returnFeedback: string = '';

  // Variáveis Relativas
  venda: Venda = new Venda();
  listaVendas: Venda[] = [];
  listaClientes: Cliente[] = [];
  
  constructor(
    private router: Router,
    private clienteServicoService: ClienteServicoService,
    private vendaServicoService: VendaServicoService
  ) { }

  ngOnInit(): void {
    this.carregarClienteSelect();
  }

  // Router: Métodos de redirecionamentos
  incluir(){
    this.router.navigate(['/venda/incluir']);
  }

  alterar(){
    this.router.navigate(['/venda/alterar/'+this.selecionado.codigo]);
  }

  // Método Padrão: seleciona uma linha da tabela e pega as informações...
  selecionar(venda){
    this.selecionado = venda;
  }

  excluir(){
    this.vendaServicoService.remover(this.selecionado).subscribe(
      (data: Feedback) => {
        this.returnFeedback = data.mensagem;
        this.statusFeedback = true;
      }
    );
  }

  // Metódo que é chamando pelo campo select do html
  pesquisar(){
    if(this.venda.cliente != null){
      let codigoCliente: number;
      codigoCliente = this.venda.cliente.codigo;
      this.buscarVendas(codigoCliente);
      
    }else{
      let codigoCliente: string = '';
      this.buscarVendas(codigoCliente);
    }

    // Remove o componente caso o usuário faça uma exclusão e em seguida realize pesquisa.
    this.statusFeedback = false;
  }

  // Metódo que é chamado pela função de pesquisar - Consulta API 
  buscarVendas(codigoCliente){
    this.vendaServicoService.pesquisar(codigoCliente).subscribe(
      data => {
        this.listaVendas = <Venda[]>data;
      }
    );
  }

  // Fecha o componente de mensagem
  fecharMensagem(){
    this.statusFeedback = false;
  }

  carregarClienteSelect(){
    this.clienteServicoService.pesquisar('').subscribe(
      (data: Cliente[]) => {
        this.listaClientes = data;
      }
    );
  }

}

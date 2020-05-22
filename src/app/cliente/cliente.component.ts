import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Feedback } from '../shared/feedback/service/feedback';
import { Cliente } from './service/cliente';

// Services
import { ClienteServicoService } from './service/cliente-servico.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  // Variáveis Fixas Componente
  valorPesquisar: string = '';
  selecionado: Cliente;
  statusFeedback: boolean = false;
  feedback: Feedback;
  returnFeedback: string = '';

  // Variáveis Relativas
  listaCliente: Cliente[] = [];
  

  constructor(
    private router: Router,
    private clienteServicoService: ClienteServicoService
  ) { }

  ngOnInit(): void {
  }

  // Router: Métodos de redirecionamentos
  incluir(){
    this.router.navigate(['/cliente/incluir']);
  }

  alterar(){
    this.router.navigate(['/cliente/alterar/'+this.selecionado.nome]);
  }
  
  // Método Padrão: seleciona uma linha da tabela e pega as informações...
  selecionar(cliente){
    this.selecionado = cliente;
  }

  pesquisar(){
    this.clienteServicoService.pesquisar(this.valorPesquisar).subscribe(
      (data: Cliente[]) => {
        this.listaCliente = data;
      }
    );
  }

  excluir(){
    this.clienteServicoService.remover(this.selecionado).subscribe(
      (data: Feedback) => {
        this.returnFeedback = data.mensagem;
        this.statusFeedback = true;
      }
    );
  }

  // Fecha o componente de mensagem
  fecharMensagem(){
    this.statusFeedback = false;
  }

}

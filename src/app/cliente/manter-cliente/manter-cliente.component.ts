import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Models
import { Feedback } from 'src/app/shared/feedback/service/feedback';
import { Cliente } from '../service/cliente';

// Service
import { ClienteServicoService } from './../service/cliente-servico.service';

@Component({
  selector: 'app-manter-cliente',
  templateUrl: './manter-cliente.component.html',
  styleUrls: ['./manter-cliente.component.scss']
})
export class ManterClienteComponent implements OnInit {

  // Variáveis Fixas Component
  operacao: String = 'Incluir';
  listaEstados: any[] = [
    { codigo: 'PE', nome: 'Pernambuco' },
    { codigo: 'AL', nome: 'Alagoas' },
    { codigo: 'SP', nome: 'São Paulo' },
    { codigo: 'RJ', nome: 'Rio de Janeiro' },
  ];
  statusFeedback: boolean = false;
  feedback: Feedback;
  returnFeedback: string = '';

  // Variáveis Relativas
  cliente: Cliente = new Cliente();
  
  constructor(
    private clienteServicoService: ClienteServicoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.receberAluno(this.activatedRoute.snapshot.params.nome);
  }

  incluir(){
    this.clienteServicoService.incluir(this.cliente).subscribe(
      (data: Feedback) => {
        this.returnFeedback = data.mensagem;
        this.statusFeedback = true;
        this.cliente = new Cliente();
      }
    );
  }

  alterar(){
    this.clienteServicoService.alterar(this.cliente).subscribe(
      (data: Feedback) => {
        this.returnFeedback = data.mensagem;
        this.statusFeedback = true;
      }
    );
  }

  voltar(){
    this.router.navigate(['/cliente']);
  }

  receberAluno(nome){
    if(nome != null){
      this.operacao = 'Alterar';
      this.clienteServicoService.pesquisar(nome).subscribe(
        data => {
          this.cliente = (<Cliente[]>data)[0];
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
      this.router.navigate(['/cliente']);

    }
  }

}

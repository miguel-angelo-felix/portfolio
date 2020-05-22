import { Cliente } from './../../cliente/service/cliente';
import { VendaItens } from './vendaitens';

export class Venda {
    codigo: number;
    data: Date;
    cliente: Cliente;
    listaVentaItem: VendaItens[] = [];
}
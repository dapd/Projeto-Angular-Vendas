import { Cliente } from 'src/app/cliente/servico/cliente';
import { VendaItem } from './vendaItem';

export class Venda{
    codigo: string;
    data: Date;
    cliente: Cliente;
    listaVendaItem: VendaItem[] = [];
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venda } from './servico/venda';
import { Cliente } from '../cliente/servico/cliente';
import { ClienteServicoService } from '../cliente/servico/cliente-servico.service';
import { VendaServicoService } from './servico/venda-servico.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.scss']
})
export class VendaComponent implements OnInit {

  venda: Venda = new Venda();
  selecionado: Venda;

  listaVenda: Venda[] = [];
  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private vendaServicoService: VendaServicoService,
    private clienteServicoService: ClienteServicoService
  ) { }

  ngOnInit(): void {

    this.clienteServicoService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    let codigoCliente = '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaServicoService.pesquisar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
      }
    );
  }

  pesquisar(){
    let codigoCliente = '';
    if(this.venda.cliente != null){
      codigoCliente = this.venda.cliente.codigo;
    }

    this.vendaServicoService.pesquisar(codigoCliente).subscribe(
      data => {
        this.listaVenda = <Venda[]>data;
      }
    );   
  }

  incluir(){    
    this.router.navigate(['/venda/incluir']);
  }

  alterar(){    
    this.router.navigate(['/venda/alterar/'+this.selecionado.cliente.codigo]);
  }

  remover(){
    this.vendaServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }

  selecionar(venda){
    this.selecionado = venda;    
  }

}

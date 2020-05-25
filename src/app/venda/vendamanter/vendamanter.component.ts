import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venda } from '../servico/venda';
import { VendaItem } from '../servico/vendaItem';
import { Produto } from 'src/app/produto/servico/produto';
import { Cliente } from 'src/app/cliente/servico/cliente';
import { VendaServicoService } from '../servico/venda-servico.service';
import { ProdutoServicoService } from 'src/app/produto/servico/produto-servico.service';
import { ClienteServicoService } from 'src/app/cliente/servico/cliente-servico.service';

@Component({
  selector: 'app-vendamanter',
  templateUrl: './vendamanter.component.html',
  styleUrls: ['./vendamanter.component.scss']
})
export class VendamanterComponent implements OnInit {

  operacao: string = 'Incluir';

  venda: Venda = new Venda();
  vendaItem: VendaItem = new VendaItem();

  listaProduto: Produto[] = [];
  listaCliente: Cliente[] = [];

  constructor(
    private router: Router,
    private vendaServicoService: VendaServicoService,
    private produtoServicoService: ProdutoServicoService,
    private clienteServicoService: ClienteServicoService
  ) { }

  ngOnInit(): void {
    this.clienteServicoService.pesquisar('').subscribe(
      data => {
        this.listaCliente = <Cliente[]>data;
      }
    );

    this.produtoServicoService.pesquisar('').subscribe(
      data => {
        this.listaProduto = <Produto[]>data;
      }
    );
  }

  incluir(){
    this.vendaServicoService.incluir(this.venda).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/venda']);
      }
    );
  }
  
  adicionar(){
    this.venda.listaVendaItem.push(this.vendaItem);
    this.vendaItem = new VendaItem();
  }

  removerItem(vendaItem){
    this.venda.listaVendaItem = this.venda.listaVendaItem.filter(obj => obj !== vendaItem);
  }

  voltar(){
    this.router.navigate(['/venda']);
  }

}

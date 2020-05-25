import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from './servico/produto';
import { ProdutoServicoService } from './servico/produto-servico.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  nome: string = '';
  listaProduto: Produto[] = [];
  selecionado: Produto;

  constructor(
    private router: Router,
    private produtoServicoService: ProdutoServicoService
  ) { }

  ngOnInit(): void {
  }

  pesquisar(nome){
    this.produtoServicoService.pesquisar(nome).subscribe(
      (data: Produto[]) => {
        this.listaProduto = data;
        //console.log(this.listaCliente);
      }
    );
  }

  selecionar(produto){
    this.selecionado = produto;
  }

  incluir(){
    this.router.navigate(['produto/incluir'])
  }

  alterar(){
    this.router.navigate(['produto/alterar/'+this.selecionado.nome]);
  }

  excluir(){
    this.produtoServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoServicoService } from '../servico/produto-servico.service';
import { Produto } from '../servico/produto';

@Component({
  selector: 'app-produtomanter',
  templateUrl: './produtomanter.component.html',
  styleUrls: ['./produtomanter.component.scss']
})
export class ProdutomanterComponent implements OnInit {

  produto: Produto = new Produto();
  operacao: string = 'Incluir';

  constructor(
    private router: Router,
    private produtoServicoService: ProdutoServicoService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let nome:String = this.activatedRouter.snapshot.params.nome;
    if(nome != null){
      this.operacao = 'Alterar';
      this.produtoServicoService.pesquisar(nome).subscribe(
        data => {
          this.produto = (<Produto[]>data)[0];
        }
      );
    }
  }

  incluir(){
    this.produtoServicoService.incluir(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);
        //console.log(this.produto);
      }
    );
  }

  alterar(){
    this.produtoServicoService.alterar(this.produto).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/produto']);
      }
    );
  }

  voltar(){
    this.router.navigate(['/produto']);
  }

}

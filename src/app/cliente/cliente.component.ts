import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServicoService } from './servico/cliente-servico.service';
import { Cliente } from './servico/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  nome: string = '';
  listaCliente: Cliente[] = [];
  selecionado: Cliente;

  constructor(
    private router: Router,
    private clienteServicoService: ClienteServicoService
  ) { }

  ngOnInit(): void {
  }

  pesquisar(nome){
    this.clienteServicoService.pesquisar(nome).subscribe(
      (data: Cliente[]) => {
        this.listaCliente = data;
        //console.log(this.listaCliente);
      }
    );
  }

  selecionar(cliente){
    this.selecionado = cliente;
  }

  incluir(){
    this.router.navigate(['cliente/incluir'])
  }

  alterar(){
    this.router.navigate(['cliente/alterar/'+this.selecionado.nome]);
  }

  excluir(){
    this.clienteServicoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    )
  }

}

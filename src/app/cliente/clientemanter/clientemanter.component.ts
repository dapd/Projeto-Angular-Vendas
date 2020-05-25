import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../servico/cliente';
import { ClienteServicoService } from '../servico/cliente-servico.service';

@Component({
  selector: 'app-clientemanter',
  templateUrl: './clientemanter.component.html',
  styleUrls: ['./clientemanter.component.scss']
})
export class ClientemanterComponent implements OnInit {

  cliente: Cliente = new Cliente();
  operacao: string = 'Incluir';

  constructor(
    private router: Router,
    private clienteServicoService: ClienteServicoService,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let nome:String = this.activatedRouter.snapshot.params.nome;
    if(nome != null){
      this.operacao = 'Alterar';
      this.clienteServicoService.pesquisar(nome).subscribe(
        data => {
          this.cliente = (<Cliente[]>data)[0];
        }
      );
    }
  }

  incluir(){
    this.clienteServicoService.incluir(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/cliente']);
      }
    );
  }

  alterar(){
    this.clienteServicoService.alterar(this.cliente).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/cliente']);
      }
    );
  }

  voltar(){
    this.router.navigate(['/cliente']);
  }

}

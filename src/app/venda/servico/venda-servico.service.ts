import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venda } from './venda';

@Injectable({
  providedIn: 'root'
})
export class VendaServicoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  pesquisar(nome: String){
    return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/consultar/'+nome);
  }

  incluir(venda: Venda){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/incluir", venda);
  }
  
  alterar(venda: Venda){
    return this.httpClient.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/alterarparcial", venda);
  }
  
  remover(venda: Venda){
    return this.httpClient.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/venda/remover", venda);
  }
}

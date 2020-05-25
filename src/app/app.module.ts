import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ClienteServicoService } from './cliente/servico/cliente-servico.service';
import { ProdutoServicoService } from './produto/servico/produto-servico.service';
import { VendaServicoService } from './venda/servico/venda-servico.service';
import { ClientemanterComponent } from './cliente/clientemanter/clientemanter.component';
import { ProdutomanterComponent } from './produto/produtomanter/produtomanter.component';
import { VendamanterComponent } from './venda/vendamanter/vendamanter.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProdutoComponent,
    VendaComponent,
    LayoutComponent,
    HomeComponent,
    ClientemanterComponent,
    ProdutomanterComponent,
    VendamanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClienteServicoService,
    ProdutoServicoService,
    VendaServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioProvider } from './usuario/usuario.service';
import { PaisComponent } from './pais/pais.component';
import {HttpModule} from '@angular/http';
import { PaisService } from './pais/pais-service';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto/produto-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    PaisComponent,
    UsuarioComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ProdutoService,PaisService,UsuarioProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

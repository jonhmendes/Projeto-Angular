import { Component } from '@angular/core';
import {Produto} from './produto';
import {ProdutoService} from './produto-service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class ProdutoComponent {
 
    produtos : Array<any>;
    produtosmapa : Array<any>;
    visibilidade : boolean = false;
    produto : Produto;
    produtosfiltro : object;

    constructor(private service: ProdutoService){
       this.visibilidade = false;
       this.produto = new Produto();
       this.produtos =        this.service.produtos;
       this.produtosfiltro = this.service.getProduto(12);
    }

    mostra(){
        this.visibilidade = true;
    }

    esconde(){
        this.visibilidade = false;
    }

    mostrarMapa(){
       this.produtosmapa =   this.service.getMapProduto();
       this.produtos =        this.service.produtos;
    }
    



}

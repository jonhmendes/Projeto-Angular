import {Injectable} from '@angular/core';
import {Produto} from './produto';

@Injectable()
export class ProdutoService{

public  produtos=[
    {
        id : 10,
        nome : 'xanxung',
        preco : 200
    },
    {
        id : 11,
        nome : 'galaxia',
        preco : 350
    },
    {
        id : 12,
        nome : 'polistation',
        preco : 150
    },
    {
        id : 13,
        nome : 'razus',
        preco : 300
    }
]


getProduto(codigo):object{
  return this.produtos.filter(item=>{
           return item.id === codigo;
 })[0];
}


getMapProduto(){
return this.produtos.filter(item =>{
    return item.id < 12
}).map(item=>{
    item.nome  = 'razus';
    return item;
});
}




}
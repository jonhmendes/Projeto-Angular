export class Produto{

 id : Number;
 nome : String;
 preco : Number;

 constructor()
 constructor(id:Number,nome:String,preco:Number)
 constructor(id?:Number,nome?:String,preco?:Number){
     this.id = id;
     this.nome= nome;
     this.preco = preco;
 }


 public set $id(id:Number){
     this.id = id;
 }

public get $id(){
    return this.id;
}


public set $nome(nome:String){
    this.nome = nome;
}

public get $nome(){
   return this.nome;
}

public set $preco(preco:Number){
    this.preco = preco;
}

public get $preco(){
   return this.preco;
}





}
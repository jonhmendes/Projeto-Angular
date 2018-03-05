export class Pais{
    id : Number;
    nome : String;
    codigo : String;

    constructor()
    constructor(id:Number,nome:String,codigo:String)
    constructor(id?:Number,nome?:String,codigo?:String){
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;

    }


}
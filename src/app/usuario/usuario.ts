export class Usuario{

    codigo : number;
    login : string;
    senha : string;

    constructor()
    constructor(codigo:number,login:string,senha:string)
    constructor(codigo?:number,login?:string,senha?:string){
        this.codigo =  codigo;
        this.login = login;
        this.senha = senha;
    }


}
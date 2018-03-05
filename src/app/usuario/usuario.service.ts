import { Usuario } from './usuario';
import { OnInit,Injectable } from '@angular/core';
@Injectable()
 export class UsuarioProvider implements OnInit{
   
    public  usuarios : Usuario[] =[
         {codigo : 10,
          login : 'um@gmail.com', 
          senha : '123'
         },
         {codigo : 11,
            login : 'dois@gmail.com', 
            senha : '123'
          },
          {codigo : 12,
            login : 'tres@gmail.com', 
            senha : '123'
           }
   ];

   getUsuario(codigo) : object{
  return this.usuarios.filter(item =>{
        return item.codigo === codigo    
  })[0];
} 

   listar(): Usuario[]{
      return  this.usuarios;
   }
  
   adicionar(usuario : Usuario){
       this.usuarios.push(usuario);
   }

   getLogar(usuario : Usuario):object{
         console.log(usuario);
         if(!usuario)return;
          return this.listar().filter(item=>{
              return item.login == usuario.login 
              &&  item.senha == usuario.senha
          })[0];
   }


    ngOnInit(): void {
        
    }


    












    
 }
import { UsuarioProvider } from './usuario.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[UsuarioProvider]
})


export class UsuarioComponent implements OnInit{
    log: string;
    listaUsuario: Usuario[];
     usuario: Usuario;
     msg:string; 
     escolha:number;

    ngOnInit(): void {
      this.log = '';  
      this.usuario = new Usuario();
      this.listaUsuario = this.service.listar();
    }

    enviar(usuario: Usuario):void{
       this.service.adicionar(usuario);
       this.usuario = new Usuario();
    }
     

   login(){
   let usuarioLogado = this.service.getLogar(this.usuario);
    if (usuarioLogado){
        this.msg = "Usuario Encontrado :" + usuarioLogado["login"];
    }else{
        this.msg = "Usuario nao Encontrado :";
    }

   }

   logRadio(element: HTMLInputElement) : void{
    this.log += `Radio ${element.value}\n`;
   }

     constructor(private service : UsuarioProvider){
     }



}

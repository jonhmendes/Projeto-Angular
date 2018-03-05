import { Component } from '@angular/core';
import { PaisService } from './pais-service';
import { OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers:[PaisService]

})


export class PaisComponent implements OnInit {

  lista : any[];
  listaPais : any[];

  constructor(private service: PaisService){

  }

  ngOnInit(): void {
   
     this.listarExterno();

  }



   public listarExterno() : void{
     this.service.listarPaisExterno().subscribe((dados)=>{
        this.listaPais = dados;
     });
   }




}

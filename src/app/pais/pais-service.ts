import {Http} from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";




@Injectable()
export class PaisService{

linkPais:string=
"https://riozela-api-dev.herokuapp.com/rs/pais";

 constructor(private http: Http){
 }

 

listarPaisExterno():Observable<any[]>{
return  this.http.get (this.linkPais).map((res)=> res.json().dados );
}

//Webservice Externo ... (Retorna Um Json)



}
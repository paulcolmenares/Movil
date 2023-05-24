import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  destURL="http://localhost:8080/editoriales"
  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  lista: any=[];
  items: any;
  constructor(private http: HttpClient) { 
    this.items = [
      {title: 'one'},
      {title: 'two'},
      {title: 'three'},
      {title: 'four'},
      {title: 'five'},
      {title: 'six'}]
  }

  filterItems(searchTerm){
    return this.items.filter((item) => {
     return item.title.toLowerCase().indexOf(
       searchTerm.toLowerCase()) > -1;
     });
    }
  buscar(searchTerm){
      return this.lista.filter((item) => {
       return item.nombre.toLowerCase().indexOf(
         searchTerm.toLowerCase()) > -1;
       });
      }
  list():Observable<any> {
    return this.http.get (this.destURL);
  }
  grabar(dato: any){
    const data_post=JSON.stringify(dato);
     return this.http.post(this.destURL, data_post, this.header);
  }
  borrar(url:string){
    return this.http.delete(url);
  }

}

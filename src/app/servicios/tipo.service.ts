import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TipoService {
  destURL="http://localhost:8080/tipos"
header = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

constructor(private http:HttpClient) { }

private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
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


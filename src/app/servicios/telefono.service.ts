import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefonoService {
URL="http://localhost:8080/telefonos"

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  constructor(private http:HttpClient) { }



  asig_tel(tel:number,per:number) {
    const per_id:
    string = "{\"codper\": \"http://localhost:8080/personas/"+per+"\"}";
    return this.http.patch(this.URL+"/"+tel,per_id,this.header);

  }
  grupos_doc(id:number):Observable<any> {
    return this.http.get(this.URL+"/"+id+"/telefonos");
  }
  grabar(dato: any){
    const data_post=JSON.stringify(dato);
     return this.http.post(this.URL, data_post, this.header);
  }
  
  list():Observable<any> {
    return this.http.get (this.URL);
  }
}
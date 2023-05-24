import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { AutorService } from '../servicios/autor.service';
import { AutoresService } from '../servicios/autores.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit {
  lista: any=[];
  filterPost='';
  constructor(private serv: AutorService,
    public alerta: AlertController , private router:Router, private datos: AutoresService) { }

  buscar(event){
    var titulo= event.detail.value;
   
      if(titulo && titulo.trim()!== ""){
      this.lista=this.lista.filter(receta=> {
       return receta.titulo.toLowerCase().indexOf(titulo.toLowerCase()) > -1;
      });
      }else{
        console.log("no hay");
      }
      
  }
  editar(data:any) {
    this.datos.set(data);
    this.router.navigate(['/add-autor'])
  }
  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.autors);
  }
  public eliminar(editorial: string) {
    this.serv.borrar(editorial).subscribe(data => this.ngOnInit());

  }
  pdf2(element: any) {
    var usu = new jsPDF('p', 'mm', 'letter');
    usu.setFont('times');
    usu.setFontSize(18);
    usu.setTextColor('blue');
    usu.text("Datos del Autor", 80, 20);
    usu.setFontSize(12);
    usu.line(15, 25, 200, 25); usu.line(15, 25, 15, 80);
    usu.line(200, 25, 200, 80); usu.line(15, 80, 200, 80);
    usu.text("Nombres: ", 20, 30);
    usu.text("Genero: ", 20, 40);
    usu.setTextColor('black');
    usu.text(element.ap, 40, 30);
    usu.text(element.am, 55, 30);
    usu.text(element.nombre, 70, 30);
    usu.text(element.genero, 40, 40);
    // usu. (element.estado,50,60); 
    usu.save("Autor");
  }
  async  delete(element: any){ 
    let miAlerta= await this.alerta.create({
      header: 'Seguro de Eliminar Datos del Autor?',
      buttons:[{
        text: 'Aceptar' ,
        handler: () => {
          this.eliminar(element._links.self.href),
         console.log('Borrado');
       }
       },{ 
          text: 'Cancelar',
           handler: () => {
               console.log('Cancelado');
             }
         }]
    });
    miAlerta.present();
    
   }

  async  modificar(element: any){  
    let miAlerta= await this.alerta.create({   
         header: 'Seguro de Habilitar al Autor?' ,
      buttons:[{
        text: 'Aceptar' ,
        handler: () => {
          if(element.estado==1){
            element.estado=0;
          }else
          element.estado=1;
         console.log(element.estado);
       }
       },{ 
          text: 'Cancelar',
           handler: () => {
               console.log('Cancelado');
             }
         }]
    });
    miAlerta.present();
    
   }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import jsPDF from 'jspdf';
import { AreaService } from '../servicios/area.service';
import { EditorialService } from '../servicios/editorial.service';
import { EjemplarService } from '../servicios/ejemplar.service';
import { EjemplaresService } from '../servicios/ejemplares.service';

@Component({
  selector: 'app-ejemplar',
  templateUrl: './ejemplar.page.html',
  styleUrls: ['./ejemplar.page.scss'],
})
export class EjemplarPage implements OnInit {
  lista: any=[];
  edi: any=[];
  are: any=[];
  constructor(private serv : EjemplarService,
    private router:Router,public alerta: AlertController, 
    private serv1: AreaService, private serv2 : EditorialService,
    private datos: EjemplaresService) { 
  }

  ngOnInit() {
    this.serv.list().subscribe(data => this.lista=data._embedded.ejemplars);
    this.serv1.list().subscribe(data =>{ console.info(data); this.are=data._embedded.areas;})
    this.serv2.list().subscribe(data =>{ 
      console.info(data); this.edi=data._embedded.editorials;})
  }
  editar(data:any) {
    this.datos.set(data);
    this.router.navigate(['/add-ejemplar'])
  }
  public eliminar(editorial: string) {
    this.serv.borrar(editorial).subscribe(data => this.ngOnInit());

  }
  pdf2(element: any) {
    var usu = new jsPDF('p', 'mm', 'letter');
    usu.setFont('times');
    usu.setFontSize(18);
    usu.setTextColor('blue');
    usu.text("Datos del Ejemplar", 80, 20);
    usu.setFontSize(12);
    usu.line(15, 25, 200, 25); usu.line(15, 25, 15, 80);
    usu.line(200, 25, 200, 80); usu.line(15, 80, 200, 80);
    usu.text("Codigo: ", 20, 30);
    usu.text("Disponible: ", 20, 40);
    usu.text("Estado: ", 20, 50);
  
    usu.setTextColor('black');
   // usu.text(element.codinv, 40, 30);
   // usu.text(element.disponible, 40, 40);
   // usu.text(element.estado, 40, 30);
  
    usu.save("Ejemplar");
  }
  async  delete(element: any){ 
    let miAlerta= await this.alerta.create({
      header: 'Seguro de Eliminar el Ejemplar?',
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
         header: 'Seguro de Habilitar el Ejemplar?' ,
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
